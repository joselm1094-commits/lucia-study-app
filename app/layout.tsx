'use client';

import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#2563eb',
};

export const metadata: Metadata = {
  title: 'Yuna - Estudio Inteligente',
  description: 'Tu aliada en oposiciones: estudio interactivo con notificaciones personalizadas',
  icons: {
    icon: '📖'
  }
};

function OneSignalInit() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
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
            const now = new Date();
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="oneSignalAppId" content="5c335363-0903-4618-8790-fc0154e3f603" />
      </head>
      <body className={`${inter.className} bg-gray-50`}>
        <OneSignalInit />
        {children}
      </body>
    </html>
  );
}
