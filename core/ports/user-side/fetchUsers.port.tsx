import User from "../../entities/user.model"

export interface FetchUsersPort {
  getUsers: () => Promise<User[]>
  getUsersById: (id: string) => Promise<User[]>
}

export default FetchUsersPort
