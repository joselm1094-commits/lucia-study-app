'use client';

import { useState, useEffect } from 'react';
import { trackQuizEvent, trackStreakUpdate, handleError } from '@/lib/monitoring';
import { QUIZ_QUESTIONS } from '@/lib/quiz-data';

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
  const [showConfetti, setShowConfetti] = useState(false);
  const [shake, setShake] = useState(false);

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
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 800);
      trackQuizEvent('quiz_completed', {
        question: currentQuestion + 1,
        correct: true,
        topic: quizData[currentQuestion].topic,
      });
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 400);
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
      const percentage = Math.round(((score + (selectedAnswer === quizData[currentQuestion].correctIndex ? 1 : 0)) / quizData.length) * 100);
      trackStreakUpdate(1, 50);
    }
  };

  if (completed) {
    const finalScore = selectedAnswer === quizData[currentQuestion].correctIndex ? score + 1 : score;
    const percentage = Math.round((finalScore / quizData.length) * 100);

    return (
      <div className="w-full max-w-2xl mx-auto p-4 animate-slide-in-up">
        <div className="card-elevated text-center">
          <div className="text-6xl mb-4 animate-bounce">✨</div>

          <h3 className="text-3xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
            ¡Quiz Completado!
          </h3>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl mb-6 border border-green-200">
            <p className="text-6xl font-black text-green-600 mb-2">
              {finalScore}/{quizData.length}
            </p>
            <p className="text-3xl font-bold text-slate-700">{percentage}%</p>
            <p className="text-sm text-slate-600 mt-2">
              {percentage >= 80 ? '¡Excelente! 🎉' : percentage >= 60 ? 'Buen trabajo! 👍' : 'Sigue practicando 💪'}
            </p>
          </div>

          <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-700 font-semibold">
              ✨ +50 XP ganados
            </p>
            <p className="text-xs text-blue-600 mt-1">
              Tu racha está protegida ✓
            </p>
          </div>

          <button
            onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setAnswered(false);
              setSelectedAnswer(null);
              setCompleted(false);
            }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 active:scale-95"
          >
            🔄 Repetir Quiz
          </button>
        </div>
      </div>
    );
  }

  const question = quizData[currentQuestion];
  const progress = ((currentQuestion + 1) / quizData.length) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      {/* Confetti effect */}
      {showConfetti && <Confetti />}

      {/* Header with progress */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
            Pregunta {currentQuestion + 1}/{quizData.length}
          </p>
          <p className="text-sm font-bold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
            Aciertos: {score}
          </p>
        </div>

        {/* Progress bar */}
        <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="mb-8 animate-slide-in-up">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 leading-relaxed">
          {question.question}
        </h3>

        {/* Difficulty indicator */}
        <div className="mb-4 flex items-center gap-2">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600">
            {question.difficulty === 'easy' && '⭐ Fácil'}
            {question.difficulty === 'medium' && '⭐⭐ Medio'}
            {question.difficulty === 'hard' && '⭐⭐⭐ Difícil'}
          </span>
          <span className="text-xs text-slate-500">• {question.topic}</span>
        </div>
      </div>

      {/* Answer options */}
      <div className={`space-y-3 mb-6 ${shake ? 'animate-shake' : ''}`}>
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={answered}
            className={`
              w-full p-4 md:p-5 text-left rounded-xl font-semibold transition-all duration-300
              border-2 active:scale-95
              ${
                selectedAnswer === index
                  ? index === question.correctIndex
                    ? 'bg-gradient-to-r from-green-100 to-emerald-100 border-green-400 text-green-900 animate-scale-in'
                    : 'bg-gradient-to-r from-red-100 to-rose-100 border-red-400 text-red-900 animate-scale-in'
                  : answered && index === question.correctIndex
                  ? 'bg-gradient-to-r from-green-100 to-emerald-100 border-green-300 text-green-900'
                  : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-indigo-400 text-slate-900 hover:shadow-md'
              }
              ${answered ? 'cursor-not-allowed' : 'cursor-pointer'}
            `}
          >
            <div className="flex items-center justify-between">
              <span>{option}</span>
              {answered && index === question.correctIndex && <span className="text-xl">✓</span>}
              {answered && selectedAnswer === index && index !== question.correctIndex && <span className="text-xl">✗</span>}
            </div>
          </button>
        ))}
      </div>

      {/* Explanation */}
      {answered && (
        <div className={`mb-6 p-4 md:p-5 rounded-lg border-l-4 ${
          selectedAnswer === question.correctIndex
            ? 'bg-green-50 border-green-500 text-green-900'
            : 'bg-blue-50 border-blue-500 text-blue-900'
        } animate-slide-in-up`}>
          <p className="font-semibold mb-2">
            {selectedAnswer === question.correctIndex ? '✓ Correcto!' : '💡 Explicación:'}
          </p>
          <p className="text-sm leading-relaxed">{question.explanation}</p>
        </div>
      )}

      {/* Next button */}
      {answered && (
        <button
          onClick={handleNext}
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 active:scale-95 animate-slide-in-up"
        >
          {currentQuestion + 1 === quizData.length ? '📊 Ver Resultados' : '→ Siguiente Pregunta'}
        </button>
      )}
    </div>
  );
}

// Confetti component
function Confetti() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-confetti-fall"
          style={{
            left: `${Math.random() * 100}%`,
            top: '-10px',
            animation: `confetti-fall ${2 + Math.random() * 1}s linear forwards`,
            animationDelay: `${i * 0.05}s`,
          }}
        >
          {['🎉', '✨', '🎊', '⭐', '🌟'][Math.floor(Math.random() * 5)]}
        </div>
      ))}
    </div>
  );
}
