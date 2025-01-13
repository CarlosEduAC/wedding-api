import app from '@/app'
import { logger } from '@/configs'

import 'dotenv/config'

const PORT = process.env.PORT || 3000

const server = app.listen(PORT, () => {
  logger.info(`🚀 Server started on port: ${PORT}`)
})

export default server
