import type { Metadata } from 'next';
import './globals.css';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
const siteRoot = new URL(siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`);
const socialImage = new URL('og.png', siteRoot);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Newida — Nos projets',
  description: 'Le hub de notre équipe : découvrez les produits, services et idées que nous construisons.',
  icons: {
    icon: `${basePath}/favicon.svg`,
  },
  openGraph: {
    title: 'Newida — Nos projets',
    description: 'Une maison pour nos idées, nos produits et nos explorations.',
    images: [{ url: socialImage, width: 1792, height: 928, alt: 'Newida — Une maison pour nos idées.' }],
    locale: 'fr_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Newida — Nos projets',
    description: 'Une maison pour nos idées, nos produits et nos explorations.',
    images: [socialImage],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
