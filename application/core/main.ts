import IObtainGamesPort from '../ports/server-side/obtainGames.port'
import IObtainUsersPort from '../ports/server-side/obtainUsers.port'

export default class ListSan {
  gameAdapter: IObtainGamesPort

  userAdapter: IObtainUsersPort

  constructor(gameAdapter: IObtainGamesPort, userAdapter: IObtainUsersPort) {
    this.gameAdapter = gameAdapter
    this.userAdapter = userAdapter
  }
}
