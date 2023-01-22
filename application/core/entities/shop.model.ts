import Offer from './offer.model'

export default class Shop {
  public id: number

  public name: string

  public offers: Offer[]

  public image_url: string

  public affiliate_url: string
}
