import { useEffect, useState } from "react"
import axios from "axios"
import Game from "../../../../../core/entities/game.model"

// Fonction à modifier pour extraire la fonction fetchGames de useFetchGames
export function useFetchGames(): Game[] {
  const [games, setGames] = useState<Game[]>([])
  useEffect(() => {
    const fetchGames = async () => {
      return await axios
        .get("https://rawg.io/api/collections/must-play/games")
        .then((res) => {
          setGames(res.data.results)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    fetchGames()
  }, [])
  return games
}
