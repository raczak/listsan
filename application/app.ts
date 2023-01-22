import UserApiAdapter from './adapters/userApi.adapter'
import GameApiAdapter from './adapters/gameApi.adapter'
import NativeUIGameAdapter from './adapters/game.adapter'
import NativeUIUserAdapter from './adapters/user.adapter'
import IObtainGamesPort from './ports/server-side/obtainGames.port'
import IObtainUsersPort from './ports/server-side/obtainUsers.port'
import FetchGamesPort from './ports/user-side/fetchGames.port'
import FetchUsersPort from './ports/user-side/fetchUsers.port'
import ListSan from './core/main'

export default class AppService {
  private listSan: ListSan

  constructor() {
    // 1. Instantiate right-side adapter(s) ("I want to go outside the hexagon")
    const rawgApiAdapter: IObtainGamesPort = new GameApiAdapter()
    // const mockApiAdapter: IObtainGamesPort = new MockApiAdapter(file.json)
    const firebaseAdapter: IObtainUsersPort = new UserApiAdapter()

    // 2. Instantiate the hexagon
    this.listSan = new ListSan(rawgApiAdapter, firebaseAdapter)

    // 3. Instantiate the left-side adapter(s) ("I want ask/to go inside the hexagon")
    // Dois être refacto pour instancier l'ui en 1 seul appel en faisant passer mes 2 adapters et le ListSan
    // Exposer ici les features que je veux soumettre à l'UI ?
  }

  // Les instances API sont exposées, pour une utilisation dans un framework front
  getGameAdapterInstance(): FetchGamesPort {
    const nativeUIGameAdapter: FetchGamesPort = new NativeUIGameAdapter(
      this.listSan
    )
    return nativeUIGameAdapter
  }

  getUserdapterInstance(): FetchUsersPort {
    const nativeUIUserAdapter: FetchUsersPort = new NativeUIUserAdapter(
      this.listSan
    )
    return nativeUIUserAdapter
  }
}
