import { Router } from 'express'

import HealthRouter from '@/routes/health.routes'
import ProductRouter from '@/routes/product.routes'
import InvitedRouter from '@/routes/invited.routes'

const routes = Router()

routes.use('/health', HealthRouter)
routes.use('/products', ProductRouter)
routes.use('/inviteds', InvitedRouter)

export default routes
