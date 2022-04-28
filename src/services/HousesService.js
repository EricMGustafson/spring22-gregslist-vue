import { AppState } from "../AppState"
import { House } from "../models/House"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class HousesService {

  async getAllHouses() {
    const res = await api.get('api/houses')
    AppState.houses = res.data.map(h => new House(h))
  }

}

export const housesService = new HousesService()