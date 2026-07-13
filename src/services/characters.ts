import type { Cast, Character } from "../types"

const baseUrl = 'https://api.tvmaze.com/shows/526/cast'

export const getCharacters = async (): Promise<Character[]> => {
  const response = await fetch(baseUrl)
  const characters: Cast[] = await response.json()
  return characters.slice(0, 16).map(c => c.character)
}