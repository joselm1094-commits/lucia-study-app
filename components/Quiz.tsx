'use client';

import { useState } from 'react';

interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const quizData: QuizQuestion[] = [
  {
    question: "¿Cuántos artículos tiene la Constitución Española de 1978?",
    options: ["150", "169", "185", "200"],
    correct: 1,
    explanation: "La CE de 1978 tiene 169 artículos distribuidos en 10 títulos."
  },
  {
    question: "¿Cuál es la forma política del Estado español según la Constitución?",
    options: ["República", "Monarquía Parlamentaria", "Monarquía Absoluta", "Democracia Directa"],
    correct: 1,
    explanation: "Art. 1.3 CE: La forma política del Estado español es la Monarquía Parlamentaria."
  },
  {
    question: "¿Cuáles son los valores superiores del ordenamiento jurídico español?",
    options: [
      "Orden, estabilidad, seguridad",
      "Libertad, justicia, igualdad, pluralismo político",
      "Tradición, honor, patriotismo",
      "Eficacia, economía, rapidez"
    ],
    correct: 1,
    explanation: "Art. 1.1 CE: España propugna como valores superiores la libertad, justicia, igualdad y pluralismo político."
  },
  {
    question: "¿Qué es el Habeas Corpus?",
    options: [
      "Derecho a huelga",
      "Procedimiento que garantiza libertad personal ante detenciones ilegales",
      "Derecho a asociación",
      "Procedimiento penal ordinario"
    ],
    correct: 1,
    explanation: "Art. 17.4 CE: Habeas Corpus protege contra detenciones ilegales (máx. 24 horas)."
  },
  {
    question: "¿Cuál es la función principal del Defensor del Pueblo?",
    options: [
      "Hacer leyes",
      "Juzgar delitos",
      "Supervisar la Administración y defender derechos constitucionales",
      "Dirigir el gobierno"
    ],
    correct: 2,
    explanation: "Art. 54 CE: El Defensor del Pueblo es comisionado para la defensa de derechos del Título I."
  },
  {
    question: "¿Cuál es la diferencia entre derechos fundamentales y principios rectores?",
    options: [
      "No hay diferencia",
      "Fundamentales (arts. 15-29) tienen máxima protección; Principios (arts. 39-52) menor protección",
      "Los fundamentales son menos importantes",
      "Principios rectores se suspenden fácilmente"
    ],
    correct: 1,
    explanation: "Los derechos fundamentales (arts. 15-29) tienen protección judicial y amparo. Los principios rectores (arts. 39-52) informan legislación pero menor protección."
  },
  {
    question: "¿Qué artículo recoge el derecho de igualdad ante la ley?",
    options: ["Artículo 10", "Artículo 14", "Artículo 20", "Artículo 24"],
    correct: 1,
    explanation: "Art. 14 CE: 'Los españoles son iguales ante la ley, sin que pueda prevalecer discriminación alguna...'"
  },
  {
    question: "¿Cuál es el procedimiento para reformar la Constitución en derechos fundamentales?",
    options: [
      "Simple mayoría del Congreso",
      "Mayoría de 2/3 de cada cámara, disolución, ratificación y referéndum",
      "Decreto del Gobierno",
      "Votación del Tribunal Constitucional"
    ],
    correct: 1,
    explanation: "Art. 168 CE: Reforma agravada requiere mayoría de 2/3, disolución de Cortes, ratificación y referéndum."
  },
  {
    question: "¿Qué es el recurso de amparo?",
    options: [
      "Demanda ordinaria ante juzgados",
      "Medio procesal ante Tribunal Constitucional para defender derechos",
      "Solicitud al Defensor del Pueblo",
      "Apelación ante Audiencia Nacional"
    ],
    correct: 1,
    explanation: "Art. 53.2 CE: Amparo es recurso ante TC para tutelar libertades y derechos (arts. 14, 15-29, 30.2)."
  },
  {
    question: "¿Cuál es el principio fundamental de la Administración Pública?",
    options: [
      "Eficiencia económica",
      "Servir con objetividad los intereses generales",
      "Rapidez en decisiones",
      "Autonomía sin control"
    ],
    correct: 1,
    explanation: "Art. 103.1 CE: Administración sirve con objetividad los intereses generales, con sometimiento pleno a ley y Derecho."
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (index: number) => {
    if (answered) return;
    setSelectedAnswer(index);
    setAnswered(true);
    if (index === quizData[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
      setSelectedAnswer(null);
    } else {
      setCompleted(true);
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
                ? index === question.correct
                  ? 'bg-green-500 text-white'
                  : 'bg-red-500 text-white'
                : answered && index === question.correct
                ? 'bg-green-200 text-green-900'
                : 'bg-gray-100 hover:bg-gray-200'
            } ${answered ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          >
            {option}
            {answered && index === question.correct && ' ✓'}
            {answered && selectedAnswer === index && index !== question.correct && ' ✗'}
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
