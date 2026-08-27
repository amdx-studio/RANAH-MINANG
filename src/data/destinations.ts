import type { Destination } from './types'

import bukitLambungImg from '../assets/images/bukit-lambung.png'
import museumAdityawarmanImg from '../assets/images/museum-adityawarman.png'
import jamGadangImg from '../assets/images/jam-gadang.png'
import lembahHarauImg from '../assets/images/lembah-harau.png'
import pasarKulinerMinangImg from '../assets/images/pasar-kuliner-minang.png'
import kampungTenunPandaiSikekImg from '../assets/images/kampung-tenun-pandai-sikek.png'

export const destinations: Destination[] = [
  {
    slug: 'bukit-lambung',
    name: 'Bukit Lambung',
    category: 'Nature',
    tags: ['Nature', 'Community Tourism'],
    location: 'West Sumatra',
    rating: 4.8,
    image: bukitLambungImg,
    gallery: [
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1500759285222-a95626b934cb?auto=format&fit=crop&w=900&q=80',
    ],
    shortDescription: 'Discover Bukit Lambung through the stories and experiences of the local community.',
    story:
      'Recovery is not only about rebuilding places. It is also about rebuilding opportunities for the people who depend on tourism. Bukit Lambung stands as a hill of rolling green ridges above the Minangkabau highlands, guided daily by residents who know every trail, every viewpoint, and every story the land holds.',
    experiences: ['bukit-lambung-community-experience'],
  },
  {
    slug: 'museum-adityawarman',
    name: 'Museum Adityawarman',
    category: 'Culture',
    tags: ['Culture', 'Heritage'],
    location: 'Padang, West Sumatra',
    rating: 4.6,
    image: museumAdityawarmanImg,
    gallery: [
      'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=900&q=80',
    ],
    shortDescription: 'A living archive of Minangkabau heritage, housed in a Rumah Gadang-style building.',
    story:
      'Recovery is not only about rebuilding places. It is also about rebuilding opportunities for the people who depend on tourism. Museum Adityawarman keeps the manuscripts, textiles, and everyday objects that carry Minangkabau matrilineal culture forward for the next generation.',
    experiences: ['museum-adityawarman-heritage-walk'],
  },
  {
    slug: 'jam-gadang',
    name: 'Jam Gadang',
    category: 'Heritage',
    tags: ['Heritage', 'Culture'],
    location: 'Bukittinggi, West Sumatra',
    rating: 4.7,
    image: jamGadangImg,
    shortDescription: 'The iconic clocktower of Bukittinggi and the heartbeat of the highland town.',
    story:
      'Recovery is not only about rebuilding places. It is also about rebuilding opportunities for the people who depend on tourism. Around Jam Gadang, generations of local vendors and guides have kept the square alive with stories, food, and craft.',
    experiences: [],
  },
  {
    slug: 'lembah-harau',
    name: 'Lembah Harau',
    category: 'Nature',
    tags: ['Nature', 'Adventure'],
    location: 'Lima Puluh Kota, West Sumatra',
    rating: 4.9,
    image: lembahHarauImg,
    shortDescription: 'Dramatic limestone cliffs and waterfalls cared for by surrounding villages.',
    story:
      'Recovery is not only about rebuilding places. It is also about rebuilding opportunities for the people who depend on tourism. The cliffs of Harau Valley shelter farmland and villages whose guides now lead travelers along the safest and most meaningful routes.',
    experiences: [],
  },
  {
    slug: 'pasar-kuliner-minang',
    name: 'Pasar Kuliner Minang',
    category: 'Culinary',
    tags: ['Culinary', 'Community'],
    location: 'Padang, West Sumatra',
    rating: 4.7,
    image: pasarKulinerMinangImg,
    shortDescription: 'A community-run culinary lane serving authentic Minang dishes since generations.',
    story:
      'Recovery is not only about rebuilding places. It is also about rebuilding opportunities for the people who depend on tourism. Every stall here is family-run, passing down recipes that define Minang cuisine across the archipelago.',
    experiences: [],
  },
  {
    slug: 'kampung-tenun-pandai-sikek',
    name: 'Kampung Tenun Pandai Sikek',
    category: 'Culture',
    tags: ['Culture', 'Craft'],
    location: 'Tanah Datar, West Sumatra',
    rating: 4.8,
    image: kampungTenunPandaiSikekImg,
    shortDescription: 'A weaving village where songket textiles are still made by hand.',
    story:
      'Recovery is not only about rebuilding places. It is also about rebuilding opportunities for the people who depend on tourism. In Pandai Sikek, songket looms have been passed from mother to daughter for generations, each pattern carrying its own meaning.',
    experiences: [],
  },
]

export const destinationCategories = ['All', 'Nature', 'Culture', 'Culinary', 'Heritage'] as const