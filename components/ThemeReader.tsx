'use client';

import { useState } from 'react';
import { themes } from '@/lib/content';

interface ThemeReaderProps {
  themeId?: number;
}

export default function ThemeReader({ themeId = 1 }: ThemeReaderProps) {
  const [selectedTheme, setSelectedTheme] = useState(themeId);
  const [selectedTab, setSelectedTab] = useState<'overview' | 'memory' | 'vocabulary'>('overview');

  const theme = themes.find(t => t.id === selectedTheme);

  if (!theme) return null;

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* Selector de temas */}
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-3">Selecciona un tema:</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {themes.map(t => (
            <button
              key={t.id}
              onClick={() => {
                setSelectedTheme(t.id);
                setSelectedTab('overview');
              }}
              className={`p-3 rounded-lg text-left font-semibold transition ${
                selectedTheme === t.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Tema {t.id}: {t.title}
            </button>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b border-gray-300">
        <button
          onClick={() => setSelectedTab('overview')}
          className={`px-4 py-2 font-semibold border-b-2 transition ${
            selectedTab === 'overview'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-600 hover:text-gray-800'
          }`}
        >
          Resumen
        </button>
        <button
          onClick={() => setSelectedTab('memory')}
          className={`px-4 py-2 font-semibold border-b-2 transition ${
            selectedTab === 'memory'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-600 hover:text-gray-800'
          }`}
        >
          Comparativa Memorable
        </button>
        <button
          onClick={() => setSelectedTab('vocabulary')}
          className={`px-4 py-2 font-semibold border-b-2 transition ${
            selectedTab === 'vocabulary'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-600 hover:text-gray-800'
          }`}
        >
          Vocabulario Clave
        </button>
      </div>

      {/* Contenido */}
      {selectedTab === 'overview' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">{theme.title}</h2>
          <p className="text-gray-700 mb-6 text-lg">{theme.description}</p>

          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
            <h3 className="text-lg font-bold mb-4 text-blue-900">📌 Conceptos Clave</h3>
            <ul className="space-y-2">
              {theme.keyPoints.map((point, idx) => (
                <li key={idx} className="text-blue-800 flex items-start">
                  <span className="mr-3 font-bold">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {selectedTab === 'memory' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">🎬 {theme.memory.title}</h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">{theme.memory.description}</p>

          <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-600">
            <h3 className="text-lg font-bold mb-3 text-yellow-900">💭 Ejemplo Concreto:</h3>
            <p className="text-yellow-900 text-base leading-relaxed">{theme.memory.example}</p>
          </div>

          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>💡 Tip Memoria:</strong> Cuando estudies este tema, visualiza la película o la comparación. Nuestro cerebro recuerda 65% más información con visualización que solo texto.
            </p>
          </div>
        </div>
      )}

      {selectedTab === 'vocabulary' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">📚 Vocabulario Esencial</h2>
          <div className="grid gap-4">
            {theme.words.map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-600">
                <h4 className="font-bold text-purple-900 mb-2">{item.word}</h4>
                <p className="text-gray-700">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Nota de estudio recomendada */}
      <div className="mt-8 p-4 bg-purple-50 rounded-lg text-sm text-purple-800">
        <p className="font-semibold mb-2">🎯 Cómo estudiar este tema:</p>
        <ol className="list-decimal list-inside space-y-1 text-xs">
          <li>Lee el Resumen (5 min)</li>
          <li>Visualiza la Comparativa Memorable (memorizar con conexión emocional)</li>
          <li>Aprende el Vocabulario Clave (2-3 palabras nuevas)</li>
          <li>Completa el Quiz sobre este tema (práctica de Active Recall)</li>
          <li>Revisa al día siguiente (Spaced Repetition)</li>
        </ol>
      </div>
    </div>
  );
}
