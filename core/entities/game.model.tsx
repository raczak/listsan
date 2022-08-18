export interface Game {
  id: number
  slug: string
  name: string
  released: string
  background_image: string
  rating: number
  rating_top: number
  ratings: Rating[]
  metacritic: number | null
  playtime: number
  updated: string
  reviews_count: number
  platforms: PlatformElement[]
  genres: Genre[]
  stores: Store[]
  clip: Clip | null
  tags: Genre[]
  short_screenshots: ShortScreenshot[]
}

export interface Genre {
  id: number
  name: string
  slug: string
  games_count: number
  image_background: string
  domain?: string
  language?: Language
}

export interface Clip {
  clip: string
  clips: { [key: string]: string }
  video: string
  preview: string
}

export enum Language {
  Eng = "eng",
}

export interface PlatformElement {
  platform: PlatformPlatform
  released_at: string
  requirements_en: Requirements | null
  requirements_ru: Requirements | null
}

export interface Requirements {
  minimum: string
  recommended?: string
}

export interface PlatformPlatform {
  id: number
  name: string
  slug: string
  image: null
  year_end: null
  year_start: number | null
  games_count: number
  image_background: string
}

export interface Store {
  id: number
  store: Genre
}

export interface ShortScreenshot {
  id: number
  image: string
}

export interface Rating {
  id: number
  title: Title
  count: number
  percent: number
}

export enum Title {
  Exceptional = "exceptional",
  Meh = "meh",
  Recommended = "recommended",
  Skip = "skip",
}

export default Game
