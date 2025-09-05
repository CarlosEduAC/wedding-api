import { Router } from 'express'

import * as Controller from '@/controllers/product.controller'

const routes = Router()

routes.get('/', Controller.findAll)
routes.post('/', Controller.create)
routes.put('/:id', Controller.update)
routes.get('/:id', Controller.findById)

export default routes
