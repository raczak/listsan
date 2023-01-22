import User from '../../core/entities/user.model'

export default interface FetchUsersPort {
  getUsers: () => Promise<User[]>
  getUsersById: (id: number) => Promise<User[]>
}
