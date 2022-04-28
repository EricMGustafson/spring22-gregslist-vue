import { AppState } from "../AppState"
import { Job } from "../models/Job"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class JobsService {

  async getAllJobs() {
    const res = await api.get('api/jobs')
    AppState.jobs = res.data.map(j => new Job(j))
  }

}

export const jobsService = new JobsService()