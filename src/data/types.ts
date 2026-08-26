export interface Destination {
  slug: string
  name: string
  category: 'Nature' | 'Culture' | 'Culinary' | 'Heritage'
  tags: string[]
  location: string
  rating: number
  image: string
  gallery?: string[]
  shortDescription: string
  story: string
  experiences: string[]
}

export interface Experience {
  slug: string
  title: string
  category: 'Nature' | 'Culture' | 'Culinary' | 'Community'
  destinationSlug: string
  duration: string
  price: number
  rating: number
  image: string
  shortDescription: string
  included: string[]
  timeline: { time: string; activity: string }[]
  supports: string[]
}

export interface CommunityMember {
  slug: string
  name: string
  role: 'Local Guide' | 'Local Culinary' | 'Local Crafts' | 'Cultural Experience'
  location: string
  image: string
  story: string
}

export interface Product {
  slug: string
  name: string
  category: 'Food' | 'Craft' | 'Souvenir' | 'Local Products'
  seller: string
  price: number
  rating: number
  image: string
}

export interface JourneyStop {
  time: string
  title: string
  description: string
}

export interface Journey {
  slug: string
  title: string
  duration: string
  price: number
  image: string
  stops: JourneyStop[]
}
