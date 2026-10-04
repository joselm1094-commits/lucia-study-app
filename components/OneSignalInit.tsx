'use client';

import { useEffect } from 'react';
import { initSentry, initPosthog } from '@/lib/monitoring';

export function OneSignalInit() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initialize monitoring
      initSentry();
      initPosthog();

      // OneSignal SDK via CDN
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.js';
      document.head.appendChild(script);

      script.onload = () => {
        if (window.OneSignal) {
          window.OneSignal.init({
            appId: '5c335363-0903-4618-8790-fc0154e3f603',
            allowLocalhostAsSecureOrigin: true,
          });

          // Notificación 08:00 AM
          setTimeout(() => {
            const streak = localStorage.getItem('streak') || '0';
            window.OneSignal.sendSelfNotification({
              headings: { en: '¡Buenos días, estudiante!' },
              contents: { en: `Tu racha actual: ${streak} 🔥 ¡Vamos a estudiar hoy!` },
              url: '/',
            });
          }, 1000);

          // Notificación 23:50 PM
          const todayLastNotif = localStorage.getItem('notif-today');
          if (todayLastNotif !== new Date().toDateString()) {
            setTimeout(() => {
              window.OneSignal.sendSelfNotification({
                headings: { en: '⏰ Última hora para tu racha' },
                contents: { en: 'Completa un quiz antes de las 00:00 para mantener tu racha viva 🔥' },
                url: '/',
              });
              localStorage.setItem('notif-today', new Date().toDateString());
            }, 2000);
          }
        }
      };
    }
  }, []);

  return null;
}
