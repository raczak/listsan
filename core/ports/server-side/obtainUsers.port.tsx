import User from "../../entities/user.model"

export interface IObtainUsersPort {
  provideUsers: () => Promise<User[]>
  provideUsersById: (id: string) => Promise<User[]>
}

export default IObtainUsersPort
