import type { Experience } from './types'

import bukitLambungImg from '../assets/images/bukit-lambung.png'
import museumAdityawarmanImg from '../assets/images/museum-adityawarman.png'
import lembahHarauImg from '../assets/images/lembah-harau.png'
import pasarKulinerMinangImg from '../assets/images/pasar-kuliner-minang.png'
import kampungTenunPandaiSikekImg from '../assets/images/kampung-tenun-pandai-sikek.png'

export const experiences: Experience[] = [
  {
    slug: 'bukit-lambung-community-experience',
    title: 'Bukit Lambung Community Experience',
    category: 'Community',
    destinationSlug: 'bukit-lambung',
    duration: '4 hours',
    price: 100000,
    rating: 4.8,
    image: bukitLambungImg,
    shortDescription: 'Trek the ridge trails of Bukit Lambung guided by the people who call it home.',
    included: [
      'Entrance Ticket',
      'Local Guide',
      'Traditional Welcome Drink',
      'Local Snack',
      'Nature Exploration',
      'Cultural Storytelling',
      'Local UMKM Voucher',
    ],
    timeline: [
      { time: '09:00', activity: 'Meet Local Guide' },
      { time: '09:30', activity: 'Explore Bukit Lambung' },
      { time: '11:00', activity: 'Local Culinary' },
      { time: '12:00', activity: 'Cultural Storytelling' },
      { time: '13:00', activity: 'Local UMKM' },
    ],
    supports: ['Local Guide', 'Local Culinary', 'Local UMKM', 'Destination Development'],
  },
  {
    slug: 'museum-adityawarman-heritage-walk',
    title: 'Museum Adityawarman Heritage Walk',
    category: 'Culture',
    destinationSlug: 'museum-adityawarman',
    duration: '2 hours',
    price: 75000,
    rating: 4.6,
    image: museumAdityawarmanImg,
    shortDescription: 'A guided walk through Minangkabau manuscripts, textiles, and matrilineal history.',
    included: ['Entrance Ticket', 'Local Guide', 'Traditional Welcome Drink', 'Cultural Storytelling'],
    timeline: [
      { time: '10:00', activity: 'Meet Local Guide' },
      { time: '10:15', activity: 'Manuscript & Textile Hall' },
      { time: '11:15', activity: 'Rumah Gadang Architecture Talk' },
      { time: '12:00', activity: 'Local UMKM Corner' },
    ],
    supports: ['Local Guide', 'Local UMKM', 'Destination Development'],
  },
  {
    slug: 'harau-valley-nature-trail',
    title: 'Harau Valley Nature Trail',
    category: 'Nature',
    destinationSlug: 'lembah-harau',
    duration: '5 hours',
    price: 120000,
    rating: 4.9,
    image: lembahHarauImg,
    shortDescription: 'Walk beneath towering limestone cliffs and hidden waterfalls with a village guide.',
    included: ['Entrance Ticket', 'Local Guide', 'Local Snack', 'Nature Exploration'],
    timeline: [
      { time: '08:00', activity: 'Meet Local Guide' },
      { time: '08:30', activity: 'Cliffside Trail' },
      { time: '10:30', activity: 'Waterfall Break' },
      { time: '12:00', activity: 'Village Lunch' },
    ],
    supports: ['Local Guide', 'Local Culinary', 'Destination Development'],
  },
  {
    slug: 'minang-culinary-tasting',
    title: 'Minang Culinary Tasting Lane',
    category: 'Culinary',
    destinationSlug: 'pasar-kuliner-minang',
    duration: '2.5 hours',
    price: 90000,
    rating: 4.7,
    image: pasarKulinerMinangImg,
    shortDescription: 'Taste your way through family-run stalls serving generations-old recipes.',
    included: ['Local Guide', 'Tasting Portions x6', 'Traditional Welcome Drink'],
    timeline: [
      { time: '17:00', activity: 'Meet Local Guide' },
      { time: '17:15', activity: 'Rendang & Gulai Tasting' },
      { time: '18:00', activity: 'Sweets & Traditional Drinks' },
      { time: '19:00', activity: 'Local UMKM Stories' },
    ],
    supports: ['Local Culinary', 'Local UMKM'],
  },
  {
    slug: 'songket-weaving-workshop',
    title: 'Songket Weaving Workshop',
    category: 'Culture',
    destinationSlug: 'kampung-tenun-pandai-sikek',
    duration: '3 hours',
    price: 130000,
    rating: 4.8,
    image: kampungTenunPandaiSikekImg,
    shortDescription: 'Sit at the loom with local weavers and learn the basics of songket craft.',
    included: ['Local Guide', 'Weaving Materials', 'Traditional Welcome Drink', 'Cultural Storytelling'],
    timeline: [
      { time: '09:00', activity: 'Meet the Weavers' },
      { time: '09:30', activity: 'Loom Basics' },
      { time: '10:30', activity: 'Guided Weaving Practice' },
      { time: '11:30', activity: 'Take Home Your Piece' },
    ],
    supports: ['Local Crafts', 'Local UMKM', 'Destination Development'],
  },
]

export const experienceCategories = ['All', 'Nature', 'Culture', 'Culinary', 'Community'] as const