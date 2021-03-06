export type Club = {
  id: string
  name: string
  address: string
  players?: {
    id: string
    lastName: string
  }[]
}

export type Player = {
  id: string
  lastName: string
  firstName: string
}
