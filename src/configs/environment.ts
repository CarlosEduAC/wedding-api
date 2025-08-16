import dotenv from 'dotenv'

dotenv.config()

export const NODE_ENV = process.env.NODE_ENV || 'development'
export const ENV = process.env.ENV || ''
export const PORT = process.env.PORT || 3000
export const BU = process.env.BU || 'cross'
export const TRIBE = process.env.TRIBE || 'financial'
export const TAGS = process.env.TAGS
export const LOG_LEVEL = process.env.LOG_LEVEL
export const APP_VERSION = process.env.APP_VERSION
export const DATABASE_URL = process.env.DATABASE_URL
