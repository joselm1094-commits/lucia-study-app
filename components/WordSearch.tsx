'use client';

import { useState } from 'react';

interface WordSearchProps {
  words: string[];
}

export default function WordSearch({ words }: WordSearchProps) {
  const GRID_SIZE = 12;
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const [grid, setGrid] = useState<string[][]>([]);
  const [selectedCells, setSelectedCells] = useState<Set<string>>(new Set());

  // Generar grid con palabras
  const generateGrid = () => {
    const newGrid: string[][] = Array(GRID_SIZE)
      .fill(null)
      .map(() => Array(GRID_SIZE).fill('?'));

    // Colocar palabras (horizontal y vertical)
    const placedWords = new Set<string>();
    for (let word of words) {
      let placed = false;
      let attempts = 0;
      while (!placed && attempts < 50) {
        const row = Math.floor(Math.random() * GRID_SIZE);
        const col = Math.floor(Math.random() * (GRID_SIZE - word.length));
        const vertical = Math.random() > 0.5;

        if (vertical && row + word.length < GRID_SIZE) {
          let canPlace = true;
          for (let i = 0; i < word.length; i++) {
            if (newGrid[row + i][col] !== '?' && newGrid[row + i][col] !== word[i]) {
              canPlace = false;
              break;
            }
          }
          if (canPlace) {
            for (let i = 0; i < word.length; i++) {
              newGrid[row + i][col] = word[i];
            }
            placedWords.add(word);
            placed = true;
          }
        } else {
          let canPlace = true;
          for (let i = 0; i < word.length; i++) {
            if (newGrid[row][col + i] !== '?' && newGrid[row][col + i] !== word[i]) {
              canPlace = false;
              break;
            }
          }
          if (canPlace) {
            for (let i = 0; i < word.length; i++) {
              newGrid[row][col + i] = word[i];
            }
            placedWords.add(word);
            placed = true;
          }
        }
        attempts++;
      }
    }

    // Llenar células vacías
    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
        if (newGrid[i][j] === '?') {
          newGrid[i][j] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        }
      }
    }

    setGrid(newGrid);
  };

  if (grid.length === 0) {
    return (
      <div className="w-full max-w-2xl mx-auto p-4">
        <h3 className="text-xl font-bold mb-4 text-center">Sopa de Letras</h3>
        <p className="text-center mb-4 text-gray-600">
          Encuentra {words.length} palabras relacionadas con el temario
        </p>
        <button
          onClick={generateGrid}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 w-full"
        >
          Comenzar Sopa de Letras
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="mb-4">
        <p className="font-semibold mb-2">Palabras encontradas: {foundWords.length}/{words.length}</p>
        <div className="flex flex-wrap gap-2">
          {foundWords.map(word => (
            <span key={word} className="bg-green-200 text-green-800 px-2 py-1 rounded text-sm">
              {word} ✓
            </span>
          ))}
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg inline-block">
        <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}>
          {grid.map((row, i) =>
            row.map((cell, j) => (
              <button
                key={`${i}-${j}`}
                onClick={() => {
                  const cellId = `${i}-${j}`;
                  const newSelected = new Set(selectedCells);
                  if (newSelected.has(cellId)) {
                    newSelected.delete(cellId);
                  } else {
                    newSelected.add(cellId);
                  }
                  setSelectedCells(newSelected);
                }}
                className={`w-8 h-8 font-bold text-sm flex items-center justify-center rounded transition ${
                  selectedCells.has(`${i}-${j}`)
                    ? 'bg-yellow-400'
                    : 'bg-white border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {cell}
              </button>
            ))
          )}
        </div>
      </div>

      <div className="mt-4 text-center">
        <button
          onClick={() => {
            generateGrid();
            setFoundWords([]);
            setSelectedCells(new Set());
          }}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Nueva sopa de letras
        </button>
      </div>
    </div>
  );
}
