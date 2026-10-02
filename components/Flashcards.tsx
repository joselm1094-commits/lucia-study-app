'use client';

import { useState, useEffect } from 'react';
import { dailyWords } from '@/lib/content';

interface CardProgress {
  word: string;
  interval: number; // días hasta próximo repaso
  ease: number; // factor de facilidad (2.5-5.0)
  nextReview: Date;
}

export default function Flashcards() {
  const [cards, setCards] = useState<CardProgress[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [learned, setLearned] = useState(0);

  // Inicializar tarjetas (algoritmo Leitner/Spaced Repetition)
  useEffect(() => {
    const today = new Date();
    const initialCards = dailyWords.map(w => ({
      word: w.word,
      interval: 1,
      ease: 2.5,
      nextReview: new Date(today.getTime() + 24 * 60 * 60 * 1000) // Mañana
    }));
    setCards(initialCards);
  }, []);

  const handleKnew = () => {
    // SM-2 Algorithm para Spaced Repetition
    const card = cards[currentIndex];
    const quality = 4; // Usuario sabe (0-5, donde 4-5 es "lo sé")
    const newEase = Math.max(1.3, card.ease + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    const newInterval = card.interval * newEase;

    const updated = [...cards];
    updated[currentIndex] = {
      ...card,
      interval: newInterval,
      ease: newEase,
      nextReview: new Date(Date.now() + newInterval * 24 * 60 * 60 * 1000)
    };
    setCards(updated);
    setLearned(learned + 1);

    if (currentIndex + 1 < cards.length) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    } else {
      // Completado
      alert(`¡Felicidades! Aprendiste ${learned + 1} conceptos hoy.`);
    }
  };

  const handleNotKnew = () => {
    const card = cards[currentIndex];
    const quality = 2; // No sabía (0-5, donde <3 es "no sé")
    const newEase = Math.max(1.3, card.ease + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    const newInterval = 1; // Vuelve a empezar

    const updated = [...cards];
    updated[currentIndex] = {
      ...card,
      interval: newInterval,
      ease: newEase,
      nextReview: new Date(Date.now() + newInterval * 24 * 60 * 60 * 1000)
    };
    setCards(updated);

    if (currentIndex + 1 < cards.length) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    } else {
      alert(`Completaste las tarjetas. Repásalas en unos días.`);
    }
  };

  if (cards.length === 0) {
    return <div className="text-center p-4">Cargando tarjetas...</div>;
  }

  const card = cards[currentIndex];
  const totalCards = cards.length;

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm font-semibold text-gray-600">
            Tarjeta {currentIndex + 1}/{totalCards}
          </p>
          <p className="text-sm font-semibold text-green-600">Aprendidas: {learned}</p>
        </div>
        <div className="w-full bg-gray-200 h-2 rounded">
          <div
            className="bg-green-600 h-2 rounded transition-all"
            style={{ width: `${((currentIndex + 1) / totalCards) * 100}%` }}
          />
        </div>
      </div>

      {/* Tarjeta 3D */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="perspective mb-8 cursor-pointer"
        style={{
          perspective: '1000px',
          height: '300px'
        }}
      >
        <div
          className={`w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg p-8 flex items-center justify-center text-white text-center transform transition-transform duration-500 ${
            isFlipped ? 'scale-95' : 'scale-100'
          }`}
          style={{
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transformStyle: 'preserve-3d'
          }}
        >
          <div>
            {!isFlipped ? (
              <>
                <p className="text-sm font-semibold mb-4 opacity-75">Concepto</p>
                <p className="text-3xl font-bold">{card.word}</p>
                <p className="text-sm mt-4 opacity-75">(Toca para ver definición)</p>
              </>
            ) : (
              <>
                <p className="text-sm font-semibold mb-4 opacity-75">Definición</p>
                <p className="text-xl">
                  {dailyWords.find(w => w.word === card.word)?.def || 'Definición no disponible'}
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Información de repaso */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6 text-sm text-gray-600">
        <p>
          <strong>Próximo repaso:</strong> {card.nextReview.toLocaleDateString('es-ES')}
        </p>
        <p>
          <strong>Facilidad:</strong> {card.ease.toFixed(2)} (Escala: 1.3-5.0)
        </p>
      </div>

      {/* Botones de respuesta */}
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={handleNotKnew}
          className="bg-red-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-red-600"
        >
          ❌ No lo sabía
        </button>
        <button
          onClick={handleKnew}
          className="bg-green-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-600"
        >
          ✅ Lo sabía
        </button>
      </div>

      {/* Información de algoritmo */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg text-xs text-blue-800">
        <p className="font-semibold mb-2">💡 Algoritmo Spaced Repetition SM-2</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Cada concepto se repite en intervalos crecientes</li>
          <li>Si lo sabes, el intervalo aumenta (menos repaso)</li>
          <li>Si no lo sabes, vuelve a día 1 (más repaso)</li>
          <li>Esto maximiza la retención a largo plazo</li>
        </ul>
      </div>
    </div>
  );
}
