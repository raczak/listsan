import User from "../../../application/core/entities/user.model"
import IObtainUsersPort from "../../../application/ports/server-side/obtainUsers.port"

export default class UserApiAdapter implements IObtainUsersPort {
  provideUsers: () => Promise<User<undefined>[]>
  provideUsersById: (id: string) => Promise<User<undefined>[]>
}
