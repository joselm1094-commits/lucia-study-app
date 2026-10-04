'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export type YunaExpression =
  | 'smile'
  | 'celebrate'
  | 'confused'
  | 'study'
  | 'applaud'
  | 'on-fire'
  | 'sleep'
  | 'profile';

interface YunaProps {
  expression?: YunaExpression;
  size?: 'small' | 'medium' | 'large';
  animated?: boolean;
  className?: string;
}

const IMAGE_MAP: Record<YunaExpression, string> = {
  smile: '/yuna/yuna-frontend-smile.jpg',
  celebrate: '/yuna/yuna-celebrate.jpg',
  confused: '/yuna/yuna-confused.jpg',
  study: '/yuna/yuna-study-mode.jpg',
  applaud: '/yuna/yuna-applauding.jpg',
  'on-fire': '/yuna/yuna-on-fire.jpg',
  sleep: '/yuna/yuna-sleeping.jpg',
  profile: '/yuna/yuna-profile.jpg',
};

const SIZE_MAP: Record<string, { width: number; height: number; containerClass: string }> = {
  small: { width: 80, height: 80, containerClass: 'w-20 h-20' },
  medium: { width: 150, height: 150, containerClass: 'w-40 h-40' },
  large: { width: 300, height: 300, containerClass: 'w-72 h-72' },
};

const ANIMATION_CLASS: Record<YunaExpression, string> = {
  smile: 'animate-fade-in',
  celebrate: 'animate-bounce',
  confused: 'animate-slide-in-down',
  study: 'animate-fade-in',
  applaud: 'animate-scale-in',
  'on-fire': 'animate-glow',
  sleep: 'animate-fade-in',
  profile: 'animate-fade-in',
};

export function Yuna({
  expression = 'smile',
  size = 'medium',
  animated = true,
  className = '',
}: YunaProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const imageSrc = IMAGE_MAP[expression];
  const sizeConfig = SIZE_MAP[size];
  const animationClass = animated ? ANIMATION_CLASS[expression] : '';

  return (
    <div
      className={`
        flex items-center justify-center
        ${sizeConfig.containerClass}
        ${animationClass}
        ${className}
      `}
    >
      <div className="relative w-full h-full">
        <Image
          src={imageSrc}
          alt={`Yuna ${expression}`}
          width={sizeConfig.width}
          height={sizeConfig.height}
          priority
          className="object-contain drop-shadow-lg"
        />
      </div>
    </div>
  );
}

/**
 * Yuna Expressions Component - Shows multiple expressions
 * Useful for UI elements, notifications, etc.
 */
export function YunaExpressions({
  expression = 'smile',
  size = 'medium',
  showLabel = false,
}: {
  expression?: YunaExpression;
  size?: 'small' | 'medium' | 'large';
  showLabel?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Yuna expression={expression} size={size} />
      {showLabel && (
        <p className="text-sm font-semibold text-slate-600 capitalize">
          {expression}
        </p>
      )}
    </div>
  );
}

/**
 * Yuna Interactive - Yuna reacts to user actions
 */
export function YunaInteractive({
  isCorrect,
  isStudying,
  hasStreak,
  isCelebrating,
}: {
  isCorrect?: boolean;
  isStudying?: boolean;
  hasStreak?: boolean;
  isCelebrating?: boolean;
}) {
  let expression: YunaExpression = 'smile';

  if (isCelebrating) {
    expression = 'celebrate';
  } else if (hasStreak) {
    expression = 'on-fire';
  } else if (isStudying) {
    expression = 'study';
  } else if (isCorrect === true) {
    expression = 'applaud';
  } else if (isCorrect === false) {
    expression = 'confused';
  }

  return <Yuna expression={expression} size="medium" animated />;
}

/**
 * Yuna Mini - Small Yuna for inline elements
 */
export function YunaMini({ expression = 'smile' }: { expression?: YunaExpression }) {
  return <Yuna expression={expression} size="small" />;
}

/**
 * Yuna Hero - Large Yuna for hero sections
 */
export function YunaHero({ expression = 'smile' }: { expression?: YunaExpression }) {
  return <Yuna expression={expression} size="large" animated />;
}
