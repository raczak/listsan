import User from './user.model'

class adminUser extends User<adminUser> {
  acl: acl | undefined
}

interface acl {
  admin: boolean
}

export default adminUser
