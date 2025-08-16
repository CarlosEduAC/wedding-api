import { Router } from 'express'

import * as Controller from '@/controllers/invited.controller'

const routes = Router()

routes.get('/', Controller.findAll)

export default routes
