import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { atlasApi } from "./AxiosService.js"
import { Game } from "../models/Game.js"




class GamesService {

    async getGames() {
        const res = await atlasApi.get(`search?skip=${AppState.gameSkip}`)
        logger.log('[GETTING GAMES]', res.data)
        AppState.games = res.data.games.map(g => new Game(g))
        logger.log('Games from AppState', AppState.games)
    }

    async searchGames(query) {
        const res = await atlasApi.get(`search?name=${query}`)
        logger.log('[SEARCHED GAME]', res.data)
        AppState.query = query
        AppState.games = res.data.games.map(g => new Game(g))
        logger.log('appstate query', query)
    }

    async getGameById(gameId) {
        const res = await atlasApi.get(`search?ids=${gameId}`)
        logger.log('res.data', res.data)
        AppState.activeGame = res.data.games[0]
        return AppState.activeGame
    }

    async changePage(num) {
        const query = AppState.query
        if (num > 0 && AppState.gameSkip <= 152947) {
            AppState.gameSkip += num
        } else if (num <= 0) { 
            AppState.gameSkip += num
            if (AppState.gameSkip < 0) AppState.gameSkip =0
        }
        // this.getGames()
        logger.log('appstate query', query)
        const res = await atlasApi.get(`search?skip=${AppState.gameSkip}&name=${query}`)
        logger.log('[GETTING SEARCH GAMES]', res.data)
        AppState.games = res.data.games.map(g => new Game(g))
        logger.log('Games from AppState', AppState.games)
    }

}

export const gamesService = new GamesService()