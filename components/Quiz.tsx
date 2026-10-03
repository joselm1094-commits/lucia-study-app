'use client';

import { useState, useEffect } from 'react';
import { trackQuizEvent, trackStreakUpdate, handleError } from '@/lib/monitoring';
import { QUIZ_QUESTIONS } from '@/lib/quiz-data';

// Convert quiz-data Question type to local QuizQuestion type
interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  topic: string;
  oposicion: string;
}

export default function Quiz() {
  const quizData = QUIZ_QUESTIONS as QuizQuestion[];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    trackQuizEvent('quiz_started', { totalQuestions: quizData.length });
  }, [quizData.length]);

  const handleAnswer = (index: number) => {
    if (answered) return;
    setSelectedAnswer(index);
    setAnswered(true);
    const isCorrect = index === quizData[currentQuestion].correctIndex;
    if (isCorrect) {
      setScore(score + 1);
      trackQuizEvent('quiz_completed', {
        question: currentQuestion + 1,
        correct: true,
        topic: quizData[currentQuestion].topic,
      });
    } else {
      trackQuizEvent('quiz_failed', {
        question: currentQuestion + 1,
        correct: false,
        topic: quizData[currentQuestion].topic,
      });
    }
  };

  const handleNext = () => {
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
      setSelectedAnswer(null);
    } else {
      setCompleted(true);
      const percentage = Math.round((score / quizData.length) * 100);
      trackStreakUpdate(1, 50); // Add 50 XP on quiz completion
    }
  };

  if (completed) {
    const percentage = Math.round((score / quizData.length) * 100);
    return (
      <div className="w-full max-w-2xl mx-auto p-4 text-center">
        <h3 className="text-2xl font-bold mb-4">¡Quiz Completado!</h3>
        <div className="bg-blue-50 p-8 rounded-lg mb-6">
          <p className="text-5xl font-bold text-blue-600 mb-2">{score}/{quizData.length}</p>
          <p className="text-2xl font-semibold text-gray-700">{percentage}%</p>
        </div>
        <button
          onClick={() => {
            setCurrentQuestion(0);
            setScore(0);
            setAnswered(false);
            setSelectedAnswer(null);
            setCompleted(false);
          }}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700"
        >
          Repetir Quiz
        </button>
      </div>
    );
  }

  const question = quizData[currentQuestion];

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm font-semibold text-gray-600">
            Pregunta {currentQuestion + 1}/{quizData.length}
          </p>
          <p className="text-sm font-semibold text-blue-600">Puntos: {score}</p>
        </div>
        <div className="w-full bg-gray-200 h-2 rounded">
          <div
            className="bg-blue-600 h-2 rounded transition-all"
            style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
          />
        </div>
      </div>

      <h3 className="text-lg font-bold mb-6">{question.question}</h3>

      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={answered}
            className={`w-full p-4 text-left rounded-lg font-semibold transition ${
              selectedAnswer === index
                ? index === question.correctIndex
                  ? 'bg-green-500 text-white'
                  : 'bg-red-500 text-white'
                : answered && index === question.correctIndex
                ? 'bg-green-200 text-green-900'
                : 'bg-gray-100 hover:bg-gray-200'
            } ${answered ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          >
            {option}
            {answered && index === question.correctIndex && ' ✓'}
            {answered && selectedAnswer === index && index !== question.correctIndex && ' ✗'}
          </button>
        ))}
      </div>

      {answered && (
        <div className="mb-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
          <p className="font-semibold text-blue-900 mb-2">Explicación:</p>
          <p className="text-blue-800">{question.explanation}</p>
        </div>
      )}

      {answered && (
        <button
          onClick={handleNext}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          {currentQuestion + 1 === quizData.length ? 'Ver Resultados' : 'Siguiente Pregunta'}
        </button>
      )}
    </div>
  );
}
