import User from "./user.model"

interface adminUser extends User {
  admin: boolean
}

export default adminUser
