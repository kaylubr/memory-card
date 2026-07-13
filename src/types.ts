export interface Cast {
  person: Person
  character: Character
  self: boolean
  voice: boolean
}

interface BaseCast {
  id: number
  url: string
  name: string
  image: Image
  _links: Links
}

interface Person extends BaseCast {
  country: Country
  birthday: string
  deathday: string | null
  gender: BiologicalGender
  updated: bigint
}

export type Character = BaseCast

type Country = {
  name: string
  code: string
  timezone: string
}

type BiologicalGender = 'Male' | 'Female'

type Image = { 
  medium: string
  original: string
}

type Links = {
  self: {
    href: string
  }
}