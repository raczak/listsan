import { GameApiAdapter } from "../infrastructure/rawg.io/adapters/gameApi.adapter"
import NativeUIGameAdapter from "../clients/native/listsan-react-native/src/adapters/game.adapter"
import IObtainGamesPort from "./ports/server-side/obtainGames.port"
import IObtainUsersPort from "./ports/server-side/obtainUsers.port"
import FetchGamesPort from "./ports/user-side/fetchGames.port"
import FetchUsersPort from "./ports/user-side/fetchUsers.port"
import ListSan from "./core/main"
import UserApiAdapter from "../infrastructure/firebase/adapters/userApi.adapter"

class AppService {
  private obtainGamesPort: IObtainGamesPort
  private obtainUsers: IObtainUsersPort
  private IRequestGames: FetchGamesPort
  private requestUsers: FetchUsersPort
  private requestConsoles: FetchUsersPort

  static Main(): void {
    // 1. Instantiate right-side adapter(s) ("I want to go outside the hexagon")
    const rawgApiAdapter: IObtainGamesPort = new GameApiAdapter()
    //const mockApiAdapter: IObtainGamesPort = new MockApiAdapter(file.json)
    const firebaseAdapter: IObtainUsersPort = new UserApiAdapter()

    // 2. Instantiate the hexagon
    const listSan: ListSan = new ListSan(rawgApiAdapter, firebaseAdapter)

    // 3. Instantiate the left-side adapter(s) ("I want ask/to go inside the hexagon")
    const nativeUIGameAdapter: FetchGamesPort = new NativeUIGameAdapter(listSan)
    const nativeUIUserAdapter: FetchUsersPort = new nativeUIUserAdapter()
    const nativeUIConsoleAdapter: FetchUsersPort = new nativeUIConsoleAdapter()
    //var consoleAdapter = new ConsoleAdapter(poetryReader);
  }
}
