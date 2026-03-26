export const dynamic = 'force-static';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://qualityodontologia.com.br';
  
  // Tratamentos disponíveis (baseado nos slugs definidos em page.tsx)
  const treatments = [
    'ortodontia',
    'implantes',
    'estetica',
    'odontopediatria',
    'endodontia',
    'protese',
    'apneia',
    'atm',
    'cirurgia'
  ];

  const treatmentUrls = treatments.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...treatmentUrls,
  ];
}
