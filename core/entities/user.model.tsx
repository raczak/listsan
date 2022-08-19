export interface User {
  id: number
  pseudo: string
  email?: Email
}

interface Email {
  address: string
  verified: boolean
}

export default User
