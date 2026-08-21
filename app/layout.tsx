import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://maison-mere-projets.berguin-paul.chatgpt.site'),
  title: 'Newida — Nos projets',
  description: 'Le hub de notre équipe : découvrez les produits, services et idées que nous construisons.',
  openGraph: {
    title: 'Newida — Nos projets',
    description: 'Une maison pour nos idées, nos produits et nos explorations.',
    images: [{ url: '/og.png', width: 1792, height: 928, alt: 'Newida — Une maison pour nos idées.' }],
    locale: 'fr_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Newida — Nos projets',
    description: 'Une maison pour nos idées, nos produits et nos explorations.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
