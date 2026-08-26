import type { CommunityMember } from './types'

export const communities: CommunityMember[] = [
  {
    slug: 'pak-ridwan',
    name: 'Pak Ridwan',
    role: 'Local Guide',
    location: 'Bukit Lambung',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    story:
      'Pak Ridwan has guided travelers across Bukit Lambung for over a decade, turning every trail into a story about the land his family has farmed for three generations.',
  },
  {
    slug: 'ibu-yanti',
    name: 'Ibu Yanti',
    role: 'Local Culinary',
    location: 'Pasar Kuliner Minang',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80',
    story:
      'Ibu Yanti runs a family rendang stall passed down from her grandmother, and now welcomes travelers to taste recipes that rarely leave the kampung.',
  },
  {
    slug: 'ibu-marlina',
    name: 'Ibu Marlina',
    role: 'Local Crafts',
    location: 'Kampung Tenun Pandai Sikek',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    story:
      'A master weaver of songket, Ibu Marlina now teaches visitors the patience and precision behind every thread of Minangkabau textile tradition.',
  },
  {
    slug: 'pak-hendri',
    name: 'Pak Hendri',
    role: 'Cultural Experience',
    location: 'Museum Adityawarman',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    story:
      'A cultural storyteller and museum host, Pak Hendri brings Minangkabau manuscripts and matrilineal history to life for every visitor who walks through.',
  },
]

export const communityRoles = ['All', 'Local Guide', 'Local Culinary', 'Local Crafts', 'Cultural Experience'] as const
