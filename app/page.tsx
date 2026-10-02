'use client';

import { useState } from 'react';
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
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
          {/* Racha Prominente */}
          <div className="mb-8">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2 font-semibold">RACHA ACTUAL</p>
              <div className="text-7xl font-black mb-2">
                🔥
              </div>
              <p className="text-5xl font-black text-orange-500 mt-2">{studyStreak}</p>
              <p className="text-gray-600 text-sm mt-1">días seguidos</p>
            </div>
          </div>

          {/* Botón Principal - Estudiar Hoy */}
          <button
            onClick={handleStartSession}
            className="mb-12 px-12 py-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-2xl rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all active:scale-95"
          >
            ESTUDIAR HOY
          </button>

          {/* Stats Mínimas */}
          <div className="w-full max-w-sm grid grid-cols-2 gap-4 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
              <p className="text-gray-600 text-sm font-medium">XP HOY</p>
              <p className="text-3xl font-black text-blue-600 mt-1">{xpToday}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl">
              <p className="text-gray-600 text-sm font-medium">NIVEL</p>
              <p className="text-3xl font-black text-purple-600 mt-1">4</p>
            </div>
          </div>

          {/* Botones Secundarios */}
          <div className="w-full max-w-sm flex flex-col gap-2">
            <button
              onClick={() => setCurrentGame('progress')}
              className="w-full py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition"
            >
              📊 Mi Progreso
            </button>
            <button
              onClick={() => setCurrentGame('missions')}
              className="w-full py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition"
            >
              🎯 Misiones
            </button>
          </div>
        </div>
      );
    }

    if (currentGame === 'session-select') {
      return (
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-black">¿Qué quieres estudiar?</h2>
            <button
              onClick={() => setCurrentGame('home')}
              className="text-gray-600 hover:text-gray-800 text-2xl"
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
                className="p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition text-left hover:scale-102"
              >
                <p className="text-4xl mb-2">{item.emoji}</p>
                <p className="font-bold text-lg">{item.name}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </button>
            ))}
          </div>
        </div>
      );
    }

    switch (currentGame) {
      case 'quiz':
        return (
          <div>
            <button
              onClick={() => setCurrentGame('home')}
              className="mb-4 text-gray-600 hover:text-gray-800 font-semibold"
            >
              ← Volver
            </button>
            <Quiz />
          </div>
        );
      case 'flashcards':
        return (
          <div>
            <button
              onClick={() => setCurrentGame('home')}
              className="mb-4 text-gray-600 hover:text-gray-800 font-semibold"
            >
              ← Volver
            </button>
            <Flashcards />
          </div>
        );
      case 'wordsearch':
        return (
          <div>
            <button
              onClick={() => setCurrentGame('home')}
              className="mb-4 text-gray-600 hover:text-gray-800 font-semibold"
            >
              ← Volver
            </button>
            <WordSearch words={wordSearchWords} />
          </div>
        );
      case 'themes':
        return (
          <div>
            <button
              onClick={() => setCurrentGame('home')}
              className="mb-4 text-gray-600 hover:text-gray-800 font-semibold"
            >
              ← Volver
            </button>
            <ThemeReader themeId={selectedTheme} />
          </div>
        );
      case 'progress':
        return (
          <div>
            <button
              onClick={() => setCurrentGame('home')}
              className="mb-4 text-gray-600 hover:text-gray-800 font-semibold"
            >
              ← Volver
            </button>
            <Progress />
          </div>
        );
      case 'missions':
        return (
          <div>
            <button
              onClick={() => setCurrentGame('home')}
              className="mb-4 text-gray-600 hover:text-gray-800 font-semibold"
            >
              ← Volver
            </button>
            <MissionsPanel />
          </div>
        );
      case 'daily':
        return (
          <div className="max-w-2xl mx-auto">
            <button
              onClick={() => setCurrentGame('home')}
              className="mb-4 text-gray-600 hover:text-gray-800 font-semibold"
            >
              ← Volver
            </button>
            <div className="text-center py-12">
              <p className="text-6xl mb-4">📅</p>
              <h2 className="text-3xl font-black mb-2">Palabra del Día</h2>
              <p className="text-5xl font-black text-blue-600 my-6">{getTodayWord()}</p>
              <p className="text-gray-600 mb-8">Aprende este concepto clave para tu examen</p>
              <button
                onClick={() => setCurrentGame('flashcards')}
                className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 hover:scale-105 transition-all"
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

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {renderContent()}
      </div>
    </main>
  );
}
// Deploy fix attempt
