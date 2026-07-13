import { useEffect, useState, type ChangeEvent } from "react"

import DefaultScreen from "./components/DefaultScreen"
import GameScreen from "./components/GameScreen"

import { getCharacters } from "./services/characters"

import type { Character } from "./types"


function App() {
  const [isGameActive, setIsGameActive] = useState(false)
  const [casts, setCasts] = useState<Character[]>([])

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const fetchedCasts = await getCharacters();
        setCasts(fetchedCasts);
      } catch (error) {
        console.error("Failed to fetch characters:", error);
      }
    };

    fetchCharacters();
  }, [])

  return isGameActive ? <GameScreen casts={casts} /> : <DefaultScreen toggleActive={setIsGameActive}/>
}

export default App
