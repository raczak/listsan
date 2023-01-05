import { useEffect, useState } from "react"
import axios from "axios"
import Game from "../../../../../../../application/core/entities/game.model"
import GameAdapter from "../../../adapters/game.adapter"

// Fonction à modifier pour extraire la fonction fetchGames de useFetchGames
export function useFetchGames(): Game[] {
  const [games, setGames] = useState<Game[]>([])
  useEffect(() => {
    const gamesAdapter = GameAdapter.getInstance()
    const fetchGames = async () => {
      const gameList = await gamesAdapter.getGames().then((games) => setGames(games))
      console.log("La liste de jeux", gameList)

      return gameList
      //     .get("https://rawg.io/api/collections/must-play/games")
      //     .then((res) => {
      //       setGames(res.data.results)
      //     })
      //     .catch((err) => {
      //       console.log(err)
      //     })
    }
    fetchGames()
  }, [])
  return games
}
