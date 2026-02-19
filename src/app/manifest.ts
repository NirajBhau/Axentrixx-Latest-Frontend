import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Axentrixx - Websites & AI Solutions Built for Business Growth',
    short_name: 'Axentrixx',
    description: 'Custom websites, AI-powered tools, and software solutions for business growth.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#F7941D',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
