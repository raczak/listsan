import User from "../entities/user.model"
import IItemRepository from "./item.repository"

export interface IUserRepository extends IItemRepository<User, Number> {
  providePreferencesByUserId: (userId: number) => User["preferences"]
  setUserPreferences: (userPreferences: User["preferences"], userId: number) => User["preferences"]
}

export default IUserRepository
