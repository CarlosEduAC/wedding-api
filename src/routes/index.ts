import { Router } from 'express'

import HealthRouter from '@/routes/health.routes'
import ProductRouter from '@/routes/product.routes'
import InvitedRouter from '@/routes/invited.routes'
import ImageRouter from '@/routes/image.routes'

const routes = Router()

routes.use('/health', HealthRouter)
routes.use('/products', ProductRouter)
routes.use('/inviteds', InvitedRouter)
routes.use('/images', ImageRouter)

export default routes
