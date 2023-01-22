import User from '../core/entities/user.model'
import IObtainUsersPort from '../ports/server-side/obtainUsers.port'

export default class UserApiAdapter implements IObtainUsersPort {
  provideUsersById: (id: number) => Promise<User<undefined>[]>

  provideUsers: () => Promise<User<undefined>[]>
}
