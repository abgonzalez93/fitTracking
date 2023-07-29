// External Libraries
import dotenv from 'dotenv'

dotenv.config()

export const config = {
    PORT: process.env.PORT !== undefined ? parseInt(process.env.PORT) : 3000,
    NODE_ENV: process.env.NODE_ENV ?? null,
    MONGODB_URI: process.env.MONGODB_URI ?? null,
    RECONNECTION_RETRY_TIME: 5000,
    RECONNECTION_MAX_ATTEMPS: 5,
    JWT_SECRET: process.env.JWT_SECRET ?? null,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN !== undefined ? parseInt(process.env.JWT_EXPIRES_IN) : null
}

export default config
