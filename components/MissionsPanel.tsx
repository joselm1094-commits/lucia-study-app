'use client';

import { useState, useEffect } from 'react';
import { dailyMissions, weeklyMissions, challengeMissions, ranks, levelRewards, streakBonuses } from '@/lib/missions';
import { Mission } from '@/lib/missions';

interface PlayerStats {
  totalXP: number;
  level: number;
  streak: number;
  lastStudyDate: Date;
  completedMissions: string[];
  pointsToday: number;
}

export default function MissionsPanel() {
  const [stats, setStats] = useState<PlayerStats>({
    totalXP: 850,
    level: 4,
    streak: 7,
    lastStudyDate: new Date(),
    completedMissions: ['daily-word', 'quiz-5', 'perfect-quiz'],
    pointsToday: 115
  });

  const [activeTab, setActiveTab] = useState<'daily' | 'weekly' | 'challenge'>('daily');

  // Calcular nivel y progreso actual
  const currentRank = ranks.find(r => r.minXP <= stats.totalXP && stats.totalXP < r.maxXP) || ranks[0];
  const nextRank = ranks[currentRank.level] || currentRank;
  const xpProgress = ((stats.totalXP - currentRank.minXP) / (nextRank.maxXP - currentRank.minXP)) * 100;

  // Calcular multiplicador por racha
  const getStreakMultiplier = () => {
    const streakEntry = Object.entries(streakBonuses)
      .reverse()
      .find(([days]) => stats.streak >= parseInt(days));
    return streakEntry ? streakEntry[1] : { multiplier: 1.0, name: 'Comenzando' };
  };

  const streakBonus = getStreakMultiplier();

  // Renderizar misiones
  const renderMissions = (missions: Mission[]) => {
    return missions.map(mission => {
      const isCompleted = stats.completedMissions.includes(mission.id);
      const progress = mission.currentCount ? (mission.currentCount / mission.targetCount) * 100 : 0;
      const finalReward = Math.floor(mission.reward * streakBonus.multiplier);

      return (
        <div
          key={mission.id}
          className={`p-4 rounded-lg border-l-4 transition ${
            isCompleted
              ? 'bg-green-50 border-green-500'
              : 'bg-gray-50 border-blue-500 hover:shadow-md'
          }`}
        >
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{mission.icon}</span>
              <div>
                <h4 className="font-bold text-gray-900">{mission.title}</h4>
                <p className="text-xs text-gray-600">{mission.description}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-yellow-600">
                +{finalReward} XP
              </div>
              {streakBonus.multiplier > 1 && (
                <div className="text-xs text-orange-600">
                  ×{streakBonus.multiplier.toFixed(1)}
                </div>
              )}
            </div>
          </div>

          {/* Barra de progreso */}
          <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-2">
            <div
              className={`h-full transition-all ${
                isCompleted
                  ? 'bg-gradient-to-r from-green-400 to-green-600'
                  : 'bg-gradient-to-r from-blue-400 to-purple-600'
              }`}
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>

          <div className="flex justify-between text-xs text-gray-600">
            <span>
              {mission.currentCount || 0}/{mission.targetCount}
            </span>
            <span
              className={
                isCompleted
                  ? 'text-green-600 font-bold'
                  : 'text-gray-600'
              }
            >
              {isCompleted ? '✅ Completado' : `${Math.round(progress)}%`}
            </span>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* Encabezado con XP y Nivel */}
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Nivel y Título */}
          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-6 rounded-lg shadow-lg">
            <p className="text-sm opacity-90 mb-2">Nivel Actual</p>
            <p className="text-4xl font-bold mb-1">{currentRank.level}</p>
            <p className="text-lg font-semibold">{currentRank.title}</p>
          </div>

          {/* XP Total */}
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-6 rounded-lg shadow-lg">
            <p className="text-sm opacity-90 mb-2">Experiencia Total</p>
            <p className="text-4xl font-bold">{stats.totalXP}</p>
            <p className="text-xs opacity-90 mt-2">XP acumulado</p>
          </div>

          {/* Racha */}
          <div className="bg-gradient-to-br from-red-500 to-pink-600 text-white p-6 rounded-lg shadow-lg">
            <p className="text-sm opacity-90 mb-2">Racha de Fuego 🔥</p>
            <p className="text-4xl font-bold">{stats.streak}</p>
            <p className="text-xs opacity-90 mt-2">{streakBonus.name}</p>
          </div>
        </div>

        {/* Barra de progreso a siguiente nivel */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700">
              Progreso a {nextRank.title}
            </span>
            <span className="text-sm font-bold text-purple-600">
              {stats.totalXP - currentRank.minXP} / {nextRank.maxXP - currentRank.minXP} XP
            </span>
          </div>
          <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-indigo-600 transition-all duration-500"
              style={{ width: `${xpProgress}%` }}
            />
          </div>
          <p className="text-xs text-gray-600 mt-2">
            Faltan {nextRank.maxXP - stats.totalXP} XP para subir de nivel
          </p>
        </div>
      </div>

      {/* Puntos hoy */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
        <p className="text-center">
          <span className="text-2xl font-bold text-blue-600">{stats.pointsToday}</span>
          <span className="text-gray-600"> XP ganados hoy</span>
        </p>
      </div>

      {/* Tabs de misiones */}
      <div className="flex gap-2 mb-6 border-b border-gray-300">
        <button
          onClick={() => setActiveTab('daily')}
          className={`px-4 py-2 font-semibold border-b-2 transition ${
            activeTab === 'daily'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-600 hover:text-gray-800'
          }`}
        >
          📅 Diarias ({dailyMissions.filter(m => stats.completedMissions.includes(m.id)).length}/{dailyMissions.length})
        </button>
        <button
          onClick={() => setActiveTab('weekly')}
          className={`px-4 py-2 font-semibold border-b-2 transition ${
            activeTab === 'weekly'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-600 hover:text-gray-800'
          }`}
        >
          📊 Semanales ({weeklyMissions.filter(m => stats.completedMissions.includes(m.id)).length}/{weeklyMissions.length})
        </button>
        <button
          onClick={() => setActiveTab('challenge')}
          className={`px-4 py-2 font-semibold border-b-2 transition ${
            activeTab === 'challenge'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-600 hover:text-gray-800'
          }`}
        >
          ⚡ Desafíos ({challengeMissions.filter(m => stats.completedMissions.includes(m.id)).length}/{challengeMissions.length})
        </button>
      </div>

      {/* Contenido de misiones */}
      <div className="space-y-3 mb-8">
        {activeTab === 'daily' && renderMissions(dailyMissions)}
        {activeTab === 'weekly' && renderMissions(weeklyMissions)}
        {activeTab === 'challenge' && renderMissions(challengeMissions)}
      </div>

      {/* Bonificaciones */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-2 border-purple-200">
        <h3 className="text-lg font-bold mb-4 text-purple-900">💡 Bonificaciones Activas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-3 rounded">
            <p className="text-sm text-gray-600">Multiplicador Racha</p>
            <p className="text-2xl font-bold text-orange-600">×{streakBonus.multiplier.toFixed(1)}</p>
            <p className="text-xs text-gray-600">{streakBonus.name}</p>
          </div>
          <div className="bg-white p-3 rounded">
            <p className="text-sm text-gray-600">Siguiente Nivel</p>
            <p className="text-2xl font-bold text-purple-600">{nextRank.title}</p>
            <p className="text-xs text-gray-600">{nextRank.maxXP - stats.totalXP} XP</p>
          </div>
          <div className="bg-white p-3 rounded">
            <p className="text-sm text-gray-600">Recompensa Nivel</p>
            <p className="text-lg font-bold text-green-600">
              {levelRewards[currentRank.level as keyof typeof levelRewards]?.name || 'N/A'}
            </p>
            <p className="text-xs text-gray-600">
              {levelRewards[currentRank.level as keyof typeof levelRewards]?.bonus || ''}
            </p>
          </div>
        </div>
      </div>

      {/* Tip motivacional */}
      <div className="mt-8 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
        <p className="text-sm text-yellow-900">
          <strong>💡 Consejo:</strong> Completa {activeTab === 'daily' ? 'todas las misiones diarias' : activeTab === 'weekly' ? 'las misiones semanales' : 'los desafíos especiales'} para maximizar tu multiplicador de racha y subir de nivel más rápido.
        </p>
      </div>
    </div>
  );
}
