import IObtainGamesPort from '../ports/driven/obtainGames.port'
import IObtainUsersPort from '../ports/driven/obtainUsers.port'

export default class ListSan {
  gameAdapter: IObtainGamesPort

  userAdapter: IObtainUsersPort

  constructor(gameAdapter: IObtainGamesPort, userAdapter: IObtainUsersPort) {
    this.gameAdapter = gameAdapter
    this.userAdapter = userAdapter
  }
}
