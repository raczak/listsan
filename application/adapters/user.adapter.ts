import User from '../core/entities/user.model'
import ListSan from '../core/main'
import FetchUsersPort from '../ports/user-side/fetchUsers.port'

export default class UserAdapter implements FetchUsersPort {
  core: ListSan

  constructor(core: ListSan) {
    this.core = core
  }

  async getUsers(): Promise<User<undefined>[]> {
    return this.core.userAdapter.provideUsers()
  }

  async getUsersById(id: number): Promise<User<undefined>[]> {
    return this.core.userAdapter.provideUsersById(id)
  }
}
