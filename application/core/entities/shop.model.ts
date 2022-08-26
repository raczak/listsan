import Offer from "./offer.model"

export class Shop {
  public id: number
  public name: string
  public offers: Offer[]
  public image_url: string
  public affiliate_url: string
}

export default Shop
