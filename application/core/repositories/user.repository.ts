import User from '../entities/user.model'
import IItemRepository from './item.repository'

export default interface IUserRepository extends IItemRepository<User, number> {
  providePreferencesByUserId: (userId: number) => User['preferences']
  setUserPreferences: (
    userPreferences: User['preferences'],
    userId: number
  ) => User['preferences']
}
