import type { Site, Artifact } from '@/types';

const allArtifacts: Artifact[] = [
  {
    id: 'art-1',
    siteId: 'site-1',
    title: 'Mughal Miniature Painting',
    description:
      'A detailed miniature painting characteristic of the Mughal era, often depicting courtly scenes, historical events, or portraits. These paintings are known for their intricate details and vibrant colors.',
    imageUrlId: 'dancing-girl-artifact', // Reusing for placeholder
    modelFileUrl: '/models/mughal_painting.glb',
    fallbackImageUrlId: 'dancing-girl-artifact',
    audioNarrationUrl: '/audio/mughal_painting_en.mp3',
  },
  {
    id: 'art-2',
    siteId: 'site-2',
    title: 'Vijayanagara Coin',
    description:
      'A gold coin from the Vijayanagara Empire, often featuring deities, royal emblems, or animals. These coins are a testament to the wealth and artistry of the period.',
    imageUrlId: 'ashoka-pillar-artifact', // Reusing for placeholder
    modelFileUrl: '/models/vijayanagara_coin.glb',
    fallbackImageUrlId: 'ashoka-pillar-artifact',
    audioNarrationUrl: '/audio/vijayanagara_coin_en.mp3',
  },
  {
    id: 'art-3',
    siteId: 'site-3',
    title: 'Iron Pillar Inscription',
    description:
      'A close-up view of the Sanskrit inscriptions on the Iron Pillar of Delhi, located in the Qutub complex. The inscription is a marvel of ancient metallurgy, having resisted rust for over 1600 years.',
    imageUrlId: 'chola-bronze-artifact', // Reusing for placeholder
    modelFileUrl: '/models/iron_pillar_inscription.glb',
    fallbackImageUrlId: 'chola-bronze-artifact',
    audioNarrationUrl: '/audio/iron_pillar_en.mp3',
  },
];

const allSites: Site[] = [
  {
    id: 'site-1',
    title: 'Taj Mahal',
    shortDescription: 'An ivory-white marble mausoleum on the south bank of the Yamuna river.',
    longDescription:
      'The Taj Mahal is an immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife. The Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world\'s heritage.',
    thumbnailUrlId: 'taj-mahal-thumb',
    coverImageUrlId: 'taj-mahal-cover',
    lowPolyModelUrl: '/models/taj_low.glb',
    highPolyModelUrl: '/models/taj_high.glb',
    fallback360UrlId: 'fallback-360-taj',
    audioNarrationUrl: '/audio/taj_mahal_en.mp3',
    artifacts: allArtifacts.filter((a) => a.siteId === 'site-1'),
  },
  {
    id: 'site-2',
    title: 'Hampi',
    shortDescription: 'The ruined city of Vijayanagara, the former capital of the Vijayanagara Empire.',
    longDescription:
      'Hampi, the seat of the famed Vijayanagara empire was the capital of the largest empire in post-mughal India, covering several states. The ruins of Hampi of the 14th Century lies scattered in about 26 sq. km area, amidst giant boulders and vegetation.',
    thumbnailUrlId: 'hampi-thumb',
    coverImageUrlId: 'hampi-cover',
    lowPolyModelUrl: '/models/hampi_low.glb',
    highPolyModelUrl: '/models/hampi_high.glb',
    fallback360UrlId: 'fallback-360-hampi',
    audioNarrationUrl: '/audio/hampi_en.mp3',
    artifacts: allArtifacts.filter((a) => a.siteId === 'site-2'),
  },
  {
    id: 'site-3',
    title: 'Qutub Minar',
    shortDescription: 'A minaret and "victory tower" that forms part of the Qutb complex.',
    longDescription:
      'The Qutub Minar is a towering 73-meter high tower built by Qutub-ud-Din Aibak in 1193. The tower was built to celebrate Muslim dominance in Delhi after the defeat of Delhi’s last Hindu ruler. This tower is the highest tower in India, complete with five storeys and a projecting balcony.',
    thumbnailUrlId: 'qutub-minar-thumb',
    coverImageUrlId: 'qutub-minar-cover',
    lowPolyModelUrl: '/models/qutub_low.glb',
    highPolyModelUrl: '/models/qutub_high.glb',
    fallback360UrlId: 'fallback-360-qutub',
    audioNarrationUrl: '/audio/qutub_minar_en.mp3',
    artifacts: allArtifacts.filter((a) => a.siteId === 'site-3'),
  },
  {
    id: 'site-4',
    title: 'Konark Sun Temple',
    shortDescription: 'A 13th-century CE sun temple at Konark in Odisha, India.',
    longDescription:
      'The Konark Sun Temple is a 13th-century temple dedicated to the Hindu sun god Surya. Shaped like a giant chariot, the temple is known for its exquisite stone carvings that cover the entire structure. It is a classic example of Kalinga architecture.',
    thumbnailUrlId: 'konark-sun-temple-thumb',
    coverImageUrlId: 'konark-sun-temple-cover',
    lowPolyModelUrl: '/models/konark_low.glb',
    highPolyModelUrl: '/models/konark_high.glb',
    fallback360UrlId: 'fallback-360-konark',
    audioNarrationUrl: '/audio/konark_en.mp3',
    artifacts: [],
  },
  {
    id: 'site-5',
    title: 'Ajanta Caves',
    shortDescription: 'Buddhist cave monuments which date from the 2nd century BCE.',
    longDescription:
      'The Ajanta Caves are approximately 30 rock-cut Buddhist cave monuments which date from the 2nd century BCE to about 480 CE in Aurangabad district of Maharashtra state of India. The caves include paintings and rock-cut sculptures described as among the finest surviving examples of ancient Indian art.',
    thumbnailUrlId: 'ajanta-caves-thumb',
    coverImageUrlId: 'ajanta-caves-cover',
    lowPolyModelUrl: '/models/ajanta_low.glb',
    highPolyModelUrl: '/models/ajanta_high.glb',
    fallback360UrlId: 'fallback-360-ajanta',
    audioNarrationUrl: '/audio/ajanta_en.mp3',
    artifacts: [],
  },
];

export const getSites = (): Site[] => allSites;

export const getSiteById = (id: string): Site | undefined => allSites.find((site) => site.id === id);

export const getArtifacts = (): Artifact[] => allArtifacts;

export const getArtifactById = (id: string): Artifact | undefined => allArtifacts.find((artifact) => artifact.id === id);
