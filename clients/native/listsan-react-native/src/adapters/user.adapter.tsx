import User from "../../../../../application/core/entities/user.model"
import ListSan from "../../../../../application/core/main"
import FetchUsersPort from "../../../../../application/ports/user-side/fetchUsers.port"

export default class userAdapter implements FetchUsersPort {
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
