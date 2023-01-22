import Console from './console.model'
import Game from './game.model'

export default class Offer {
  public id: number

  public merchand_name: string

  public game: Game

  public console: Console // 1 offer can have 1 game and 1 console

  public price: number

  public consoleId: number
}
