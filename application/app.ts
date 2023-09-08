/* The AppService class is responsible for instantiating adapters and the ListSan hexagon, and provides
methods to get instances of left-side adapters for fetching games and users. */

import UserApiAdapter from './adapters/driven/userApi.adapter'
import GameApiAdapter from './adapters/driven/gameApi.adapter'
import NativeUIGameAdapter from './adapters/driving/game.adapter'
import NativeUIUserAdapter from './adapters/driving/user.adapter'
import IObtainGamesPort from './ports/driven/obtainGames.port'
import IObtainUsersPort from './ports/driven/obtainUsers.port'
import FetchGamesPort from './ports/driving/fetchGames.port'
import FetchUsersPort from './ports/driving/fetchUsers.port'
import ListSan from './core/main'
import { apiConfigurations, ApiConfig } from './api.config'

export default class AppService {
  private listSan: ListSan

  private apiConfig: ApiConfig

  constructor(apiConfigKey: string) {
    // 1. Instantiate right-side adapter(s) ("I want to go outside the hexagon")
    // const rawgApiAdapter: IObtainGamesPort = new GameApiAdapter(
    //   this.apiConfigIGDB
    // )
    this.apiConfig = apiConfigurations[apiConfigKey]
    const gameAPIAdapter: IObtainGamesPort = this.createGamesPort()

    // const mockApiAdapter: IObtainGamesPort = new MockApiAdapter(file.json)
    const firebaseAdapter: IObtainUsersPort = new UserApiAdapter()

    // 2. Instantiate the hexagon
    this.listSan = new ListSan(gameAPIAdapter, firebaseAdapter)

    // 3. Instantiate the left-side adapter(s) ("I want ask/to go inside the hexagon")
    // Dois être refacto pour instancier l'ui en 1 seul appel en faisant passer mes 2 adapters et le ListSan
    // Exposer ici les features que je veux soumettre à l'UI ?
  }

  // 4. Instantiate left-side adapter(s) ("I want ask/to go inside the hexagon")
  // Les instances API sont exposées, pour une utilisation dans un framework front

  /* The `getGameAdapterInstance()` method returns an instance of the `NativeUIGameAdapter` class,
  which is a left-side adapter for fetching games. It takes an instance of the `ListSan` class as a
  parameter and returns the created adapter. */
  getGameAdapterInstance(): FetchGamesPort {
    const nativeUIGameAdapter: FetchGamesPort = new NativeUIGameAdapter(
      this.listSan
    )
    return nativeUIGameAdapter
  }

  /* The `getUserdapterInstance()` method returns an instance of the `NativeUIUserAdapter` class, which
  is a left-side adapter for fetching users. It takes an instance of the `ListSan` class as a
  parameter and returns the created adapter. */
  getUserdapterInstance(): FetchUsersPort {
    const nativeUIUserAdapter: FetchUsersPort = new NativeUIUserAdapter(
      this.listSan
    )
    return nativeUIUserAdapter
  }

  /**
   * The function creates a games port by instantiating a GameApiAdapter with the provided apiConfig.
   * @returns The method `createGamesPort` is returning an instance of `GameApiAdapter` with the
   * `apiConfig` passed as a parameter.
   */
  private createGamesPort(): IObtainGamesPort {
    return new GameApiAdapter(this.apiConfig)
  }
}
