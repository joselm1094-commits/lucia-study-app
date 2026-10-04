import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { OneSignalInit } from '../components/OneSignalInit';
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
