import type { Journey } from './types'

import museumAdityawarmanImg from '../assets/images/museum-adityawarman.png'
import bukitLambungImg from '../assets/images/bukit-lambung.png'
import lembahHarauImg from '../assets/images/lembah-harau.png'
import pasarKulinerMinangImg from '../assets/images/pasar-kuliner-minang.png'
import kampungTenunPandaiSikekImg from '../assets/images/kampung-tenun-pandai-sikek.png'

export const journeys: Journey[] = [
  {
    slug: 'discover-minang-1-day',
    title: '1 Day — Discover Minang',
    duration: '1 Day',
    price: 175000,
    image: museumAdityawarmanImg,
    stops: [
      { time: '09:00', title: 'Museum Adityawarman', description: 'Begin with the manuscripts and textiles that carry Minangkabau history.' },
      { time: '11:00', title: 'Authentic Minang Culinary', description: 'Taste rendang and gulai made by generations-old family recipes.' },
      { time: '13:00', title: 'Bukit Lambung', description: 'Trek the community-guided trails above the highlands.' },
      { time: '15:00', title: 'Local UMKM', description: 'Meet the makers behind local crafts and products.' },
      { time: '16:00', title: 'Cultural Experience', description: 'Close the day with storytelling and traditional welcome drink.' },
    ],
  },
  {
    slug: 'nature-escape-1-day',
    title: '1 Day — Nature Escape',
    duration: '1 Day',
    price: 190000,
    image: bukitLambungImg,
    stops: [
      { time: '07:00', title: 'Bukit Lambung', description: 'Trek the ridge trails guided by locals who know every path.' },
      { time: '10:00', title: 'Viewpoint Break', description: 'Rest and take in the highland scenery over a light snack.' },
      { time: '12:00', title: 'Village Lunch', description: 'Enjoy a home-cooked meal prepared by a local family.' },
      { time: '14:00', title: 'Community Craft Stop', description: 'Meet local makers and learn about their handmade products.' },
      { time: '16:00', title: 'Sunset Farewell', description: 'Wrap up the day with tea and stories from your guide.' },
    ],
  },
  {
    slug: 'harau-adventure-2-day',
    title: '2 Days — Harau Valley Adventure',
    duration: '2 Days',
    price: 320000,
    image: lembahHarauImg,
    stops: [
      { time: 'Day 1 · 08:00', title: 'Lembah Harau Trail', description: 'Walk beneath towering limestone cliffs with a village guide.' },
      { time: 'Day 1 · 12:00', title: 'Waterfall Picnic', description: 'Cool off near hidden waterfalls and enjoy a packed lunch.' },
      { time: 'Day 1 · 18:00', title: 'Village Stay', description: 'Rest overnight with a host family in a nearby village.' },
      { time: 'Day 2 · 08:00', title: 'Morning Farm Walk', description: 'Explore rice fields and orchards surrounding the valley.' },
      { time: 'Day 2 · 11:00', title: 'Farewell Lunch', description: 'Share a final meal before heading back.' },
    ],
  },
  {
    slug: 'culinary-trail-1-day',
    title: '1 Day — Minang Culinary Trail',
    duration: '1 Day',
    price: 150000,
    image: pasarKulinerMinangImg,
    stops: [
      { time: '10:00', title: 'Pasar Kuliner Minang', description: 'Wander the community-run culinary lane with a local guide.' },
      { time: '11:30', title: 'Rendang & Gulai Tasting', description: 'Sample dishes made from recipes passed down for generations.' },
      { time: '13:00', title: 'Sweets & Traditional Drinks', description: 'Try local desserts and refreshing traditional beverages.' },
      { time: '15:00', title: 'Meet the Cooks', description: 'Hear the stories behind the family-run stalls.' },
      { time: '16:30', title: 'Take-Home Snacks', description: 'Pick up local snacks to bring home from a UMKM vendor.' },
    ],
  },
  {
    slug: 'heritage-craft-2-day',
    title: '2 Days — Heritage & Craft Immersion',
    duration: '2 Days',
    price: 350000,
    image: kampungTenunPandaiSikekImg,
    stops: [
      { time: 'Day 1 · 09:00', title: 'Museum Adityawarman', description: 'Explore manuscripts, textiles, and matrilineal history.' },
      { time: 'Day 1 · 13:00', title: 'Jam Gadang Square', description: 'Wander Bukittinggi\u2019s iconic clocktower and local stalls.' },
      { time: 'Day 1 · 18:00', title: 'Village Stay', description: 'Overnight with a weaving family in Pandai Sikek.' },
      { time: 'Day 2 · 09:00', title: 'Songket Weaving Workshop', description: 'Sit at the loom and learn the basics of songket craft.' },
      { time: 'Day 2 · 13:00', title: 'Take Home Your Piece', description: 'Finish your own woven piece to bring home.' },
    ],
  },
]