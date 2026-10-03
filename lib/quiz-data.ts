export interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  topic: string;
  oposicion: string;
}

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    question: '¿Cuántos artículos tiene la Constitución Española de 1978?',
    options: ['150', '169', '185', '200'],
    correctIndex: 1,
    explanation: 'La CE de 1978 tiene 169 artículos distribuidos en 10 títulos.',
    difficulty: 'easy',
    topic: 'Constitución Española',
    oposicion: 'multiples',
  },
  {
    id: 2,
    question: '¿Quién es el Jefe del Estado en España según la Constitución?',
    options: ['El Presidente del Gobierno', 'El Rey', 'El Presidente del Congreso', 'El Consejero de Estado'],
    correctIndex: 1,
    explanation: 'Según el artículo 56 de la CE, el Rey es el Jefe del Estado.',
    difficulty: 'easy',
    topic: 'Jefatura del Estado',
    oposicion: 'multiples',
  },
  {
    id: 3,
    question: '¿Cuál es la edad mínima para ser diputado en el Congreso?',
    options: ['18 años', '21 años', '25 años', '30 años'],
    correctIndex: 2,
    explanation: 'Según el artículo 146 de la CE, los diputados deben tener 25 años.',
    difficulty: 'medium',
    topic: 'Congreso de los Diputados',
    oposicion: 'multiples',
  },
  {
    id: 4,
    question: '¿Cuántas comunidades autónomas hay en España?',
    options: ['15', '17', '19', '21'],
    correctIndex: 1,
    explanation: 'España tiene 17 comunidades autónomas y 2 ciudades autónomas.',
    difficulty: 'easy',
    topic: 'Organización Territorial',
    oposicion: 'multiples',
  },
  {
    id: 5,
    question: '¿Cuál es el máximo de legislaturas que puede ejercer un Rey?',
    options: ['Una', 'Dos', 'Ilimitadas', 'Cuatro'],
    correctIndex: 2,
    explanation: 'No hay límite de legislaturas para el Rey, reina de por vida.',
    difficulty: 'medium',
    topic: 'Monarquía',
    oposicion: 'multiples',
  },
  {
    id: 6,
    question: '¿Quién propone el Presidente del Gobierno?',
    options: ['El Rey', 'El Congreso', 'El Senado', 'La Corte Constitucional'],
    correctIndex: 0,
    explanation: 'El Rey propone el Presidente del Gobierno al Congreso (artículo 62).',
    difficulty: 'medium',
    topic: 'Gobierno',
    oposicion: 'multiples',
  },
  {
    id: 7,
    question: '¿Cuál es la duración de una legislatura en España?',
    options: ['3 años', '4 años', '5 años', '6 años'],
    correctIndex: 1,
    explanation: 'Las legislaturas duran 4 años según el artículo 68 de la CE.',
    difficulty: 'easy',
    topic: 'Sistema Electoral',
    oposicion: 'multiples',
  },
  {
    id: 8,
    question: '¿Qué es el Tribunal Constitucional?',
    options: [
      'Un juzgado penal',
      'El órgano de defensa de la Constitución',
      'Una sala del Tribunal Supremo',
      'La corte de apelación'
    ],
    correctIndex: 1,
    explanation: 'El Tribunal Constitucional es el órgano de defensa de la Constitución (artículo 159).',
    difficulty: 'medium',
    topic: 'Justicia Constitucional',
    oposicion: 'multiples',
  },
  {
    id: 9,
    question: '¿Cuántos miembros componen el Tribunal Constitucional?',
    options: ['9', '12', '15', '18'],
    correctIndex: 1,
    explanation: 'El TC está compuesto por 12 miembros según el artículo 159 de la CE.',
    difficulty: 'hard',
    topic: 'Tribunal Constitucional',
    oposicion: 'multiples',
  },
  {
    id: 10,
    question: '¿Qué es un decreto-ley?',
    options: [
      'Una ley aprobada por las cortes',
      'Una norma con rango de ley dictada en casos de necesidad',
      'Un acuerdo del gobierno',
      'Una orden del Rey'
    ],
    correctIndex: 1,
    explanation: 'El decreto-ley es una norma con rango de ley que el Gobierno puede dictar en casos de necesidad (artículo 86).',
    difficulty: 'hard',
    topic: 'Fuentes del Derecho',
    oposicion: 'multiples',
  },
];

export function getRandomQuestions(count: number = 10): Question[] {
  const shuffled = [...QUIZ_QUESTIONS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, QUIZ_QUESTIONS.length));
}

export function getQuestionsByDifficulty(difficulty: 'easy' | 'medium' | 'hard'): Question[] {
  return QUIZ_QUESTIONS.filter((q) => q.difficulty === difficulty);
}

export function getQuestionsByTopic(topic: string): Question[] {
  return QUIZ_QUESTIONS.filter((q) => q.topic === topic);
}
