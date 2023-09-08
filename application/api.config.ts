import IObtainGamesPort from './ports/driven/obtainGames.port'

interface ApiConfig {
  accessTokenURL?: string
  dataAPIURL: string
  dataFields: string
  authHeaders: { [key: string]: string }
  corsAPIURL: string
  apiCallType: string
  callBackAuthUrlForBearer?: string
}

// Define specific interfaces for each API
interface IgdbConfig extends ApiConfig {
  bearer: string
}
interface RawgConfig extends ApiConfig {
  key?: string
}

// Define a new type which combines both specific interfaces
type GameApiConfig = IgdbConfig | RawgConfig

const igdbClientId = 'lrfyt3y7lw1ygbs0gq60cescdxgamp'
const igdbClientSecret = 'pkyv33qogabm0rdpo6j5ps8vrhzajf'
const rawgKey = '1e1e4261198043149952843804fbbf66'

const apiConfigurations: { [key: string]: GameApiConfig } = {
  igdb: {
    callBackAuthUrlForBearer: `https://id.twitch.tv/oauth2/token?client_id=${igdbClientId}&client_secret=${igdbClientSecret}&grant_type=client_credentials`,
    accessTokenURL:
      'https://id.twitch.tv/oauth2/token?client_id=lrfyt3y7lw1ygbs0gq60cescdxgamp&client_secret=pkyv33qogabm0rdpo6j5ps8vrhzajf&grant_type=client_credentials',
    dataAPIURL: 'https://api.igdb.com/v4/games',
    dataFields: '*;',
    authHeaders: {
      'Client-ID': igdbClientId,
      'Content-Type': 'application/json'
    },
    corsAPIURL: 'http://localhost:3001/api/games',
    apiCallType: 'POST'
  },
  rawg: {
    dataAPIURL: 'https://api.rawg.io/api/games',
    dataFields: 'name, background_image, released, rating',
    authHeaders: {
      'Content-Type': 'application/json'
    },
    corsAPIURL: 'http://localhost:3001/api/games',
    key: rawgKey,
    apiCallType: 'GET'
  }
}

export { apiConfigurations, ApiConfig }
