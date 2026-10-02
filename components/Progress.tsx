'use client';

import { useState, useEffect } from 'react';

interface ProgressStats {
  totalStudyTime: number; // minutos
  quizzesTaken: number;
  averageScore: number;
  consecutiveDays: number;
  themesCompleted: number;
  conceptsLearned: number;
  streak: number;
  lastStudyDate: Date;
}

export default function Progress() {
  const [stats, setStats] = useState<ProgressStats>({
    totalStudyTime: 245,
    quizzesTaken: 12,
    averageScore: 78,
    consecutiveDays: 5,
    themesCompleted: 2,
    conceptsLearned: 24,
    streak: 5,
    lastStudyDate: new Date()
  });

  // Simulación - en producción vendría de localStorage/base de datos
  useEffect(() => {
    const savedStats = localStorage.getItem('studyStats');
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    }
  }, []);

  const achievements = [
    { label: 'Primer Día', condition: stats.consecutiveDays >= 1, icon: '🎯' },
    { label: 'Semana Completa', condition: stats.consecutiveDays >= 7, icon: '🔥' },
    { label: '10 Conceptos', condition: stats.conceptsLearned >= 10, icon: '🧠' },
    { label: '100 Preguntas', condition: stats.quizzesTaken >= 10, icon: '💯' },
    { label: '2 Temas', condition: stats.themesCompleted >= 2, icon: '📚' },
    { label: '80% Promedio', condition: stats.averageScore >= 80, icon: '⭐' }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">📊 Mi Progreso</h2>

      {/* Racha de fuego */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gradient-to-br from-red-500 to-orange-500 text-white p-6 rounded-lg shadow-lg">
          <p className="text-sm opacity-90 mb-1">Racha de Fuego 🔥</p>
          <p className="text-4xl font-bold">{stats.consecutiveDays}</p>
          <p className="text-sm opacity-90">días seguidos</p>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-purple-500 text-white p-6 rounded-lg shadow-lg">
          <p className="text-sm opacity-90 mb-1">Calificación Promedio</p>
          <p className="text-4xl font-bold">{stats.averageScore}%</p>
          <p className="text-sm opacity-90">{stats.quizzesTaken} quizzes</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-teal-500 text-white p-6 rounded-lg shadow-lg">
          <p className="text-sm opacity-90 mb-1">Conceptos Aprendidos</p>
          <p className="text-4xl font-bold">{stats.conceptsLearned}</p>
          <p className="text-sm opacity-90">palabras clave</p>
        </div>
      </div>

      {/* Estadísticas detalladas */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-bold mb-4">📈 Estadísticas de Estudio</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-gray-600">Tiempo Total</p>
            <p className="text-2xl font-bold text-blue-600">{Math.round(stats.totalStudyTime / 60)}h {stats.totalStudyTime % 60}m</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Quizzes Completados</p>
            <p className="text-2xl font-bold text-green-600">{stats.quizzesTaken}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Temas Completados</p>
            <p className="text-2xl font-bold text-purple-600">{stats.themesCompleted}/5</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Último Estudio</p>
            <p className="text-2xl font-bold text-orange-600">
              {stats.lastStudyDate.toLocaleDateString('es-ES')}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Estudios por Semana</p>
            <p className="text-2xl font-bold text-red-600">5 días</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Promedio Diario</p>
            <p className="text-2xl font-bold text-pink-600">49 min</p>
          </div>
        </div>
      </div>

      {/* Logros */}
      <div>
        <h3 className="text-lg font-bold mb-4">🏆 Logros Desbloqueados</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-lg text-center transition ${
                achievement.condition
                  ? 'bg-yellow-100 border-2 border-yellow-400 scale-105'
                  : 'bg-gray-200 opacity-50 grayscale'
              }`}
            >
              <p className="text-3xl mb-2">{achievement.icon}</p>
              <p className="font-semibold text-sm">{achievement.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recomendaciones */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
        <p className="text-sm text-blue-900">
          <strong>💡 Consejo:</strong> Estás yendo muy bien. Si mantienes esta racha 7 días seguidos, desbloquearás el logro "Semana de Fuego 🔥".
          Solo faltan {7 - stats.consecutiveDays} días.
        </p>
      </div>

      {/* Proyección */}
      <div className="mt-6 p-4 bg-green-50 rounded-lg">
        <h4 className="font-bold text-green-900 mb-3">📅 Proyección de Aprendizaje</h4>
        <div className="space-y-2 text-sm text-green-800">
          <p>✓ En 2 semanas: Completarás todos los 5 primeros temas</p>
          <p>✓ En 1 mes: Alcanzarás 90% en promedio de quizzes</p>
          <p>✓ En 2 meses: Habrás estudiado 200+ conceptos</p>
        </div>
      </div>
    </div>
  );
}
