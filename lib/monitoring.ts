// Sentry Error Tracking
export function initSentry() {
  if (typeof window !== 'undefined') {
    // Mock Sentry for MVP
    window.Sentry = {
      captureException: (error: Error) => {
        console.error('❌ [Sentry] Error captured:', error.message);
        // In production: send to sentry.io
      },
      captureMessage: (message: string) => {
        console.warn('⚠️ [Sentry] Message captured:', message);
      },
    };
  }
}

// Posthog Analytics
export function initPosthog() {
  if (typeof window !== 'undefined') {
    // Mock Posthog for MVP
    window.posthog = {
      capture: (event: string, properties?: Record<string, any>) => {
        console.log(`📊 [Analytics] Event: ${event}`, properties);
        // In production: send to posthog.com
      },
      identify: (userId: string, properties?: Record<string, any>) => {
        console.log(`👤 [Analytics] User identified: ${userId}`, properties);
      },
      reset: () => {
        console.log('🔄 [Analytics] User reset');
      },
    };
  }
}

// Track Quiz Events
export function trackQuizEvent(event: 'quiz_started' | 'quiz_completed' | 'quiz_failed', data?: Record<string, any>) {
  if (window.posthog) {
    window.posthog.capture(event, {
      timestamp: new Date().toISOString(),
      ...data,
    });
  }
}

// Track Streak Updates
export function trackStreakUpdate(streak: number, xp: number) {
  if (window.posthog) {
    window.posthog.capture('streak_updated', {
      streak,
      xp,
      timestamp: new Date().toISOString(),
    });
  }
}

// Error Handler
export function handleError(error: Error, context?: string) {
  console.error(`❌ Error${context ? ` in ${context}` : ''}:`, error);
  if (window.Sentry) {
    window.Sentry.captureException(error);
  }
}

// Type declarations for global window
declare global {
  interface Window {
    Sentry?: {
      captureException: (error: Error) => void;
      captureMessage: (message: string) => void;
    };
    posthog?: {
      capture: (event: string, properties?: Record<string, any>) => void;
      identify: (userId: string, properties?: Record<string, any>) => void;
      reset: () => void;
    };
  }
}
