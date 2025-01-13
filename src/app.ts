import express from 'express'
import swaggerUi from 'swagger-ui-express'
import cors from 'cors'
import RateLimit from 'express-rate-limit'

import errorHandler from '@/middlewares/errorHandler.middleware'
import swagger from '../swagger.json'
import routes from '@/routes'

const app = express()

const limiter = RateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
})

app.use(cors())
app.use(express.json())
app.use(limiter)
app.use(routes)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swagger))
app.use(errorHandler)

export default app
