import User from "../../core/entities/user.model"

export interface IObtainUsersPort {
  provideUsers: () => Promise<User[]>
  provideUsersById: (id: number) => Promise<User[]>
}

export default IObtainUsersPort
