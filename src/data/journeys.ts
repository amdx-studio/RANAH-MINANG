import type { Journey } from './types'

export const journeys: Journey[] = [
  {
    slug: 'discover-minang-1-day',
    title: '1 Day — Discover Minang',
    duration: '1 Day',
    price: 175000,
    image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1400&q=80',
    stops: [
      { time: '09:00', title: 'Museum Adityawarman', description: 'Begin with the manuscripts and textiles that carry Minangkabau history.' },
      { time: '11:00', title: 'Authentic Minang Culinary', description: 'Taste rendang and gulai made by generations-old family recipes.' },
      { time: '13:00', title: 'Bukit Lambung', description: 'Trek the community-guided trails above the highlands.' },
      { time: '15:00', title: 'Local UMKM', description: 'Meet the makers behind local crafts and products.' },
      { time: '16:00', title: 'Cultural Experience', description: 'Close the day with storytelling and traditional welcome drink.' },
    ],
  },
]
