import { Router } from 'express'
// import { validate } from '@/middlewares/validate.middleware'
// import { ProductBodySchema } from '@/models/schemas/product.schema'

import * as Controller from '@/controllers/product.controller'

const routes = Router()

routes.get('/', Controller.findAll)
routes.post('/', Controller.create)
routes.put('/:id', Controller.update)
routes.get('/:id', Controller.findById)

export default routes
