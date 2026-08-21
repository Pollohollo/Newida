import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Maison Mère — Nos projets',
  description: 'Le hub de notre équipe : découvrez les produits, services et idées que nous construisons.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
