import User from "../entities/user.model"
import IUserRepository from "../repositories/user.repository"

export class UserPreferences {
  constructor(private user: User, private userRepository: IUserRepository) {}

  getUserPreferences(): User["preferences"] {
    return this.userRepository.providePreferencesByUserId(this.user.id)
  }

  setUserPreferences(userPreferences: User["preferences"]): void {
    this.userRepository.setUserPreferences(userPreferences, this.user.id)
  }
}

export default UserPreferences
