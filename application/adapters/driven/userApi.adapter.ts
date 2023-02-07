import User from '../../core/entities/user.model'
import IObtainUsersPort from '../../ports/driven/obtainUsers.port'

export default class UserApiAdapter implements IObtainUsersPort {
  provideUsersById: (id: number) => Promise<User<undefined>[]>

  provideUsers: () => Promise<User<undefined>[]>
}
