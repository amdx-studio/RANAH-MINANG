import type { CommunityMember } from './types'

import member1 from '../assets/images/1.png'
import member2 from '../assets/images/2.png'
import member3 from '../assets/images/3.png'
import member4 from '../assets/images/4.png'
import member5 from '../assets/images/5.png'
import member6 from '../assets/images/6.png'

export const communities: CommunityMember[] = [
  {
    slug: 'pak-ridwan',
    name: 'Pak Ridwan',
    role: 'Local Guide',
    location: 'Bukit Lambung',
    image: member1,
    story:
      'Pak Ridwan has guided travelers across Bukit Lambung for over a decade, turning every trail into a story about the land his family has farmed for three generations.',
  },
  {
    slug: 'ibu-yanti',
    name: 'Ibu Yanti',
    role: 'Local Culinary',
    location: 'Pasar Kuliner Minang',
    image: member2,
    story:
      'Ibu Yanti runs a family rendang stall passed down from her grandmother, and now welcomes travelers to taste recipes that rarely leave the kampung.',
  },
  {
    slug: 'ibu-marlina',
    name: 'Ibu Marlina',
    role: 'Local Crafts',
    location: 'Kampung Tenun Pandai Sikek',
    image: member3,
    story:
      'A master weaver of songket, Ibu Marlina now teaches visitors the patience and precision behind every thread of Minangkabau textile tradition.',
  },
  {
    slug: 'ibu-sari',
    name: 'Ibu Sari',
    role: 'Cultural Experience',
    location: 'Museum Adityawarman',
    image: member4,
    story:
      'A cultural storyteller and museum host, Ibu Sari brings Minangkabau manuscripts and matrilineal history to life for every visitor who walks through.',
  },
  {
    slug: 'ibu-nova',
    name: 'Ibu Nova',
    role: 'Local Guide',
    location: 'Lembah Harau',
    image: member5,
    story:
      'Ibu Nova grew up beneath the cliffs of Harau Valley and now leads travelers along the safest, most scenic routes through her home village.',
  },
  {
    slug: 'ibu-desi',
    name: 'Ibu Desi',
    role: 'Cultural Experience',
    location: 'Jam Gadang',
    image: member6,
    story:
      'Ibu Desi has spent her life around the square of Jam Gadang, sharing the stories of Bukittinggi passed down through her family of local vendors.',
  },
]

export const communityRoles = ['All', 'Local Guide', 'Local Culinary', 'Local Crafts', 'Cultural Experience'] as const