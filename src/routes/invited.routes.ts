import { Router } from 'express'

import * as Controller from '@/controllers/invited.controller'

const routes = Router()

routes.get('/', Controller.findAll)
routes.post('/', Controller.create)
routes.put('/:id', Controller.update)
routes.post('/many', Controller.createMany)

export default routes
