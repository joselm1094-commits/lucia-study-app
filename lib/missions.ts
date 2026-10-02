export interface Mission {
  id: string;
  title: string;
  description: string;
  reward: number; // puntos XP
  type: 'daily' | 'weekly' | 'challenge';
  requiredAction: string;
  targetCount: number;
  currentCount?: number;
  completed?: boolean;
  difficulty: 'easy' | 'medium' | 'hard';
  icon: string;
  bonusMultiplier?: number; // bonus si se completa rápido
}

export const dailyMissions: Mission[] = [
  {
    id: 'daily-word',
    title: 'Palabra del Día',
    description: 'Aprende la palabra clave del día',
    reward: 10,
    type: 'daily',
    requiredAction: 'flashcard',
    targetCount: 1,
    difficulty: 'easy',
    icon: '📝'
  },
  {
    id: 'quiz-5',
    title: 'Quiz Rápido',
    description: 'Responde 5 preguntas correctamente',
    reward: 25,
    type: 'daily',
    requiredAction: 'quiz',
    targetCount: 5,
    difficulty: 'medium',
    icon: '❓'
  },
  {
    id: 'flashcards-10',
    title: 'Repaso Inteligente',
    description: 'Completa 10 tarjetas de flashcards',
    reward: 30,
    type: 'daily',
    requiredAction: 'flashcards',
    targetCount: 10,
    difficulty: 'medium',
    icon: '🎴'
  },
  {
    id: 'wordsearch',
    title: 'Cazador de Palabras',
    description: 'Encuentra todas las palabras en la sopa de letras',
    reward: 20,
    type: 'daily',
    requiredAction: 'wordsearch',
    targetCount: 1,
    difficulty: 'easy',
    icon: '🔤'
  },
  {
    id: 'theme-read',
    title: 'Erudito del Día',
    description: 'Lee 1 tema completo',
    reward: 35,
    type: 'daily',
    requiredAction: 'theme',
    targetCount: 1,
    difficulty: 'hard',
    icon: '📚'
  },
  {
    id: 'perfect-quiz',
    title: '¡Perfección! ⭐',
    description: 'Completa un quiz con 10/10 respuestas correctas',
    reward: 50,
    type: 'daily',
    requiredAction: 'quiz-perfect',
    targetCount: 1,
    difficulty: 'hard',
    icon: '💯',
    bonusMultiplier: 2
  }
];

export const weeklyMissions: Mission[] = [
  {
    id: 'week-50-points',
    title: 'Ganador de la Semana',
    description: 'Acumula 350+ puntos esta semana',
    reward: 100,
    type: 'weekly',
    requiredAction: 'points',
    targetCount: 350,
    difficulty: 'hard',
    icon: '🏆'
  },
  {
    id: 'week-consistent',
    title: 'Consistencia de Hierro',
    description: 'Estudia 7 días seguidos',
    reward: 150,
    type: 'weekly',
    requiredAction: 'streak',
    targetCount: 7,
    difficulty: 'hard',
    icon: '🔥'
  },
  {
    id: 'week-theme-master',
    title: 'Maestro de Tema',
    description: 'Lee 3 temas completos esta semana',
    reward: 80,
    type: 'weekly',
    requiredAction: 'themes',
    targetCount: 3,
    difficulty: 'medium',
    icon: '📖'
  },
  {
    id: 'week-quiz-streak',
    title: 'Racha Inteligente',
    description: '5 quizzes con 80%+ de puntuación',
    reward: 120,
    type: 'weekly',
    requiredAction: 'quiz-streak',
    targetCount: 5,
    difficulty: 'hard',
    icon: '🎯'
  }
];

export const challengeMissions: Mission[] = [
  {
    id: 'challenge-speed',
    title: 'Velocidad Extrema',
    description: 'Completa 10 preguntas en menos de 5 minutos',
    reward: 75,
    type: 'challenge',
    requiredAction: 'speed-quiz',
    targetCount: 10,
    difficulty: 'hard',
    icon: '⚡'
  },
  {
    id: 'challenge-marathon',
    title: 'Maratón Mental',
    description: 'Estudia 120+ minutos en un día',
    reward: 100,
    type: 'challenge',
    requiredAction: 'marathon',
    targetCount: 120,
    difficulty: 'hard',
    icon: '💪'
  },
  {
    id: 'challenge-perfectionist',
    title: 'Perfeccionista',
    description: 'Obtén 3 quizzes perfectos (10/10)',
    reward: 200,
    type: 'challenge',
    requiredAction: 'perfect-quizzes',
    targetCount: 3,
    difficulty: 'hard',
    icon: '✨'
  },
  {
    id: 'challenge-all-themes',
    title: 'Enciclopedia Viviente',
    description: 'Lee TODOS los 5 temas',
    reward: 250,
    type: 'challenge',
    requiredAction: 'all-themes',
    targetCount: 5,
    difficulty: 'hard',
    icon: '🧠'
  },
  {
    id: 'challenge-flashcard-master',
    title: 'Maestro de Tarjetas',
    description: 'Completa 50 flashcards sin errores',
    reward: 150,
    type: 'challenge',
    requiredAction: 'flashcard-perfect',
    targetCount: 50,
    difficulty: 'hard',
    icon: '🎴✨'
  }
];

// Sistema de niveles/rangos
export const ranks = [
  { level: 1, minXP: 0, maxXP: 100, title: '👶 Aprendiz', color: 'gray' },
  { level: 2, minXP: 100, maxXP: 250, title: '🟢 Novato', color: 'green' },
  { level: 3, minXP: 250, maxXP: 500, title: '🔵 Estudiante', color: 'blue' },
  { level: 4, minXP: 500, maxXP: 1000, title: '🟣 Erudito', color: 'purple' },
  { level: 5, minXP: 1000, maxXP: 1500, title: '🟠 Experto', color: 'orange' },
  { level: 6, minXP: 1500, maxXP: 2500, title: '🔴 Maestro', color: 'red' },
  { level: 7, minXP: 2500, maxXP: 4000, title: '⭐ Genio', color: 'yellow' },
  { level: 8, minXP: 4000, maxXP: 6000, title: '💎 Legendario', color: 'cyan' },
  { level: 9, minXP: 6000, maxXP: 10000, title: '👑 Supremo', color: 'gold' }
];

// Recompensas al subir nivel
export const levelRewards = {
  1: { name: 'Primer Paso', bonus: 'Desbloquea temas adicionales', icon: '📖' },
  2: { name: 'Nuevo Horizonte', bonus: '+25% XP en todos los quizzes', icon: '📈' },
  3: { name: 'Especialista', bonus: 'Desbloquea misiones semanales', icon: '🎯' },
  4: { name: 'Intelectual', bonus: '+50% puntos en quizzes perfectos', icon: '🧠' },
  5: { name: 'Maestría', bonus: 'Desbloquea desafíos especiales', icon: '⚡' },
  6: { name: 'Legendario', bonus: 'Acceso a modo hardcore', icon: '👑' },
  7: { name: 'Apotheosis', bonus: 'Tu nombre en el salón de la fama', icon: '🏅' },
  8: { name: 'Infinito', bonus: 'Certificado de dominio total', icon: '🌟' },
  9: { name: 'Transcendencia', bonus: 'Eres un demigod del saber', icon: '👑✨' }
};

// Bonificaciones por racha
export const streakBonuses = {
  3: { multiplier: 1.1, name: '🔥 Calentando' },
  7: { multiplier: 1.25, name: '🔥🔥 En llamas' },
  14: { multiplier: 1.5, name: '🔥🔥🔥 Inferno' },
  30: { multiplier: 2.0, name: '🌟 Mensual invicto' },
  60: { multiplier: 3.0, name: '👑 Leyenda viviente' }
};
