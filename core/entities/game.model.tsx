import { Clip, Genre, IGame, PlatformElement, Rating, ShortScreenshot, Store } from "./igame.model"

export class Game implements IGame {
  id: number
  name: string
  affiliate_url: string
  image_url: string
  constructor(id: number, name: string, affiliate_url: string, image_url: string) {
    this.id = id
    this.name = name
    this.affiliate_url = affiliate_url
    this.image_url = image_url
  }
  slug: string
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

export default Game
