import { Router } from 'express'

import * as Controller from '@/controllers/image.controller'

const routes = Router()

routes.get('/', Controller.findAll)
routes.post('/', Controller.create)
routes.post('/many', Controller.createMany)

export default routes
