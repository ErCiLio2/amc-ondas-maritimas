export const services = [
  {
    slug: 'procurement',
    code: 'SRV-001',
    icon: '⚓',
    numLabel: '01 / PROC',
    titleKey: 's1h',
    descKey: 's1p',
    bulletKeys: ['s1a', 's1b', 's1c', 's1d', 's1e'],
    image: 'https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?w=1600&q=75&auto=format&fit=crop',
  },
  {
    slug: 'shipchandler',
    code: 'SRV-002',
    icon: '🚢',
    numLabel: '02 / SHIP',
    titleKey: 's2h',
    descKey: 's2p',
    bulletKeys: ['s2a', 's2b', 's2c', 's2d', 's2e'],
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1600&q=75&auto=format&fit=crop',
  },
  {
    slug: 'oxigenio-acetileno',
    code: 'SRV-003',
    icon: '🔩',
    numLabel: '03 / GAS',
    titleKey: 's3h',
    descKey: 's3p',
    bulletKeys: ['s3a', 's3b', 's3c', 's3d', 's3e'],
    image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=1600&q=75&auto=format&fit=crop',
  },
  {
    slug: 'crew-change',
    code: 'SRV-004',
    icon: '👥',
    numLabel: '04 / CREW',
    titleKey: 's4h',
    descKey: 's4p',
    bulletKeys: ['s4a', 's4b', 's4c', 's4d', 's4e'],
    image: 'https://images.unsplash.com/photo-1504387103978-e4ee71416c38?w=1600&q=75&auto=format&fit=crop',
  },
];

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}
