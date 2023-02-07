import User from '../../core/entities/user.model'

export default interface IObtainUsersPort {
  provideUsers: () => Promise<User[]>
  provideUsersById: (id: number) => Promise<User[]>
}
