import { Router } from 'express'

import HealthRouter from '@/routes/health.routes'
import InvitedRouter from '@/routes/invited.routes'

const routes = Router()

routes.use('/health', HealthRouter)
routes.use('/inviteds', InvitedRouter)

export default routes
