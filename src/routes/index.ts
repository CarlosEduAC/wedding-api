import { Router } from 'express'

import HealthRouter from '@/routes/health.routes'
import ProductRouter from '@/routes/product.routes'

const routes = Router()

routes.use('/health', HealthRouter)
routes.use('/products', ProductRouter)

export default routes
