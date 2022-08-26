import User from "../../../application/core/entities/user.model"
import IObtainUsersPort from "../../../application/ports/server-side/obtainUsers.port"

export default class UserApiAdapter implements IObtainUsersPort {
  provideUsers(): Promise<User<undefined>[]> {
    throw new Error("Method not implemented.")
  }
  provideUsersById(id: number): Promise<User<undefined>[]> {
    throw new Error("Method not implemented.")
  }
}
