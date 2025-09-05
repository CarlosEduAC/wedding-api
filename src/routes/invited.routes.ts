import { Router } from 'express'

import * as Controller from '@/controllers/invited.controller'

const routes = Router()

routes.get('/', Controller.findAll)
routes.put('/:id', Controller.update)
routes.get('/confirmeds', Controller.findConfirmed)

export default routes
