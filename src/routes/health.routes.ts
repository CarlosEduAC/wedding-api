import { Router } from 'express'

import * as Controller from '@/controllers/health.controller'

const routes = Router()

routes.get('/', Controller.get)

export default routes
