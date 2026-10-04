'use client';

import { useState, useEffect } from 'react';
import Quiz from '@/components/Quiz';
import Flashcards from '@/components/Flashcards';
import WordSearch from '@/components/WordSearch';
import ThemeReader from '@/components/ThemeReader';
import Progress from '@/components/Progress';
import MissionsPanel from '@/components/MissionsPanel';
import { wordSearchWords } from '@/lib/content';

type GameType = 'home' | 'quiz' | 'flashcards' | 'wordsearch' | 'themes' | 'progress' | 'daily' | 'missions' | 'session-select';

export default function Home() {
  const [currentGame, setCurrentGame] = useState<GameType>('home');
  const [selectedTheme, setSelectedTheme] = useState<number>(1);
  const [studyStreak, setStudyStreak] = useState(7);
  const [xpToday, setXpToday] = useState(0);
  const [sessionActive, setSessionActive] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getTodayWord = () => {
    const words = ['Constitución', 'Derechos Fundamentales', 'Administración', 'Justicia', 'Libertad'];
    const today = new Date();
    const index = today.getDate() % words.length;
    return words[index];
  };

  const handleStartSession = () => {
    setSessionActive(true);
    setCurrentGame('session-select');
  };

  const handleSessionComplete = () => {
    setXpToday(xpToday + 50);
    setSessionActive(false);
    setCurrentGame('home');
  };

  const renderContent = () => {
    if (currentGame === 'home') {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex flex-col items-center justify-center px-4 py-8 md:py-12">
          {/* Logo/Brand */}
          <div className="mb-8 text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
              YUNA
            </h1>
            <p className="text-slate-600 text-sm md:text-base font-medium">Estudio Inteligente</p>
          </div>

          {/* Racha Section */}
          <div className="mb-12 w-full max-w-sm animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="card-elevated text-center relative overflow-hidden">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-2xl -z-10"></div>

              <p className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wider mb-3">
                🔥 Racha Actual
              </p>

              <div className="text-7xl md:text-8xl font-black mb-3 animate-glow">
                🔥
              </div>

              <p className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text mb-2">
                {studyStreak}
              </p>

              <p className="text-slate-600 text-sm md:text-base font-medium">
                días en racha constante
              </p>

              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-500">¡No la pierdas hoy!</p>
              </div>
            </div>
          </div>

          {/* CTA Button - Estudiar Hoy */}
          <button
            onClick={handleStartSession}
            className="mb-12 px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-lg md:text-2xl rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 active:scale-95 animate-slide-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            🎯 ESTUDIAR HOY
          </button>

          {/* Stats Cards */}
          <div className="w-full max-w-sm grid grid-cols-2 gap-4 mb-12 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="card bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <p className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wider">
                📊 XP Hoy
              </p>
              <p className="text-3xl md:text-4xl font-black text-indigo-600 mt-2">{xpToday}</p>
              <p className="text-xs text-slate-500 mt-1">de 500 posibles</p>

              {/* Progress bar */}
              <div className="mt-3 h-2 bg-blue-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500"
                  style={{ width: `${(xpToday / 500) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="card bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <p className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wider">
                ⭐ Nivel
              </p>
              <p className="text-3xl md:text-4xl font-black text-purple-600 mt-2">4</p>
              <p className="text-xs text-slate-500 mt-1">Aprendiz Rápido</p>

              {/* Level indicator */}
              <div className="mt-3 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full ${
                      i < 4 ? 'bg-purple-500' : 'bg-purple-200'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Secondary Buttons */}
          <div className="w-full max-w-sm flex flex-col gap-3 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => setCurrentGame('progress')}
              className="w-full py-3 md:py-4 bg-white border-2 border-indigo-200 hover:border-indigo-400 text-indigo-600 font-semibold rounded-xl transition-all duration-300 hover:bg-indigo-50 active:scale-95"
            >
              📊 Mi Progreso
            </button>
            <button
              onClick={() => setCurrentGame('missions')}
              className="w-full py-3 md:py-4 bg-white border-2 border-purple-200 hover:border-purple-400 text-purple-600 font-semibold rounded-xl transition-all duration-300 hover:bg-purple-50 active:scale-95"
            >
              🎯 Misiones
            </button>
          </div>
        </div>
      );
    }

    if (currentGame === 'session-select') {
      return (
        <div className="max-w-2xl mx-auto px-4 py-8 animate-slide-in-up">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              ¿Qué quieres estudiar?
            </h2>
            <button
              onClick={() => setCurrentGame('home')}
              className="text-slate-400 hover:text-slate-600 text-2xl transition-colors"
            >
              ✕
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: 'Flashcards', emoji: '🎴', desc: 'Repaso rápido', game: 'flashcards' },
              { name: 'Quiz', emoji: '❓', desc: 'Test de 5 preguntas', game: 'quiz' },
              { name: 'Palabra del Día', emoji: '📅', desc: 'Concepto nuevo', game: 'daily' },
              { name: 'Tema Nuevo', emoji: '📚', desc: 'Lectura completa', game: 'themes' },
            ].map((item: any) => (
              <button
                key={item.game}
                onClick={() => setCurrentGame(item.game as any)}
                className="p-6 bg-white border-2 border-slate-200 hover:border-indigo-400 rounded-xl hover:shadow-lg hover:scale-102 transition-all duration-300 text-left active:scale-95"
              >
                <p className="text-4xl mb-3">{item.emoji}</p>
                <p className="font-bold text-lg text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </button>
            ))}
          </div>
        </div>
      );
    }

    switch (currentGame) {
      case 'quiz':
        return (
          <div className="animate-slide-in-up">
            <button
              onClick={() => setCurrentGame('home')}
              className="mb-6 text-indigo-600 hover:text-indigo-700 font-semibold flex items-center gap-2 transition-colors"
            >
              ← Volver a inicio
            </button>
            <Quiz />
          </div>
        );
      case 'flashcards':
        return (
          <div className="animate-slide-in-up">
            <button
              onClick={() => setCurrentGame('home')}
              className="mb-6 text-indigo-600 hover:text-indigo-700 font-semibold flex items-center gap-2 transition-colors"
            >
              ← Volver a inicio
            </button>
            <Flashcards />
          </div>
        );
      case 'wordsearch':
        return (
          <div className="animate-slide-in-up">
            <button
              onClick={() => setCurrentGame('home')}
              className="mb-6 text-indigo-600 hover:text-indigo-700 font-semibold flex items-center gap-2 transition-colors"
            >
              ← Volver a inicio
            </button>
            <WordSearch words={wordSearchWords} />
          </div>
        );
      case 'themes':
        return (
          <div className="animate-slide-in-up">
            <button
              onClick={() => setCurrentGame('home')}
              className="mb-6 text-indigo-600 hover:text-indigo-700 font-semibold flex items-center gap-2 transition-colors"
            >
              ← Volver a inicio
            </button>
            <ThemeReader themeId={selectedTheme} />
          </div>
        );
      case 'progress':
        return (
          <div className="animate-slide-in-up">
            <button
              onClick={() => setCurrentGame('home')}
              className="mb-6 text-indigo-600 hover:text-indigo-700 font-semibold flex items-center gap-2 transition-colors"
            >
              ← Volver a inicio
            </button>
            <Progress />
          </div>
        );
      case 'missions':
        return (
          <div className="animate-slide-in-up">
            <button
              onClick={() => setCurrentGame('home')}
              className="mb-6 text-indigo-600 hover:text-indigo-700 font-semibold flex items-center gap-2 transition-colors"
            >
              ← Volver a inicio
            </button>
            <MissionsPanel />
          </div>
        );
      case 'daily':
        return (
          <div className="max-w-2xl mx-auto animate-slide-in-up">
            <button
              onClick={() => setCurrentGame('home')}
              className="mb-6 text-indigo-600 hover:text-indigo-700 font-semibold flex items-center gap-2 transition-colors"
            >
              ← Volver a inicio
            </button>
            <div className="card-elevated text-center">
              <p className="text-6xl mb-4">📅</p>
              <h2 className="text-3xl font-black mb-2">Palabra del Día</h2>
              <p className="text-5xl font-black text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text my-6">
                {getTodayWord()}
              </p>
              <p className="text-slate-600 mb-8">Aprende este concepto clave para tu examen</p>
              <button
                onClick={() => setCurrentGame('flashcards')}
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-lg transition-all duration-300 active:scale-95"
              >
                Practicar Ahora
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {renderContent()}
      </div>
    </main>
  );
}
