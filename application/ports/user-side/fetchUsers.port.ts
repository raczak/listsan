import User from "../../core/entities/user.model"

export interface FetchUsersPort {
  getUsers: () => Promise<User[]>
  getUsersById: (id: number) => Promise<User[]>
}

export default FetchUsersPort
