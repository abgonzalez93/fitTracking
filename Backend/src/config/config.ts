// External Libraries
import dotenv from 'dotenv'

dotenv.config()

export const config = {
    PORT: process.env.PORT !== undefined ? parseInt(process.env.PORT) : 3000,
    NODE_ENV: process.env.NODE_ENV ?? null,
    MONGODB_URI: process.env.MONGODB_URI ?? null,
    RECONNECTION_RETRY_TIME: 5000,
    RECONNECTION_MAX_ATTEMPS: 5,
    JWT_SECRET_ACCESS: process.env.JWT_SECRET_ACCESS ?? null,
    JWT_SECRET_REFRESH: process.env.JWT_SECRET_REFRESH ?? null,
    JWT_EXPIRES_ACCESS: process.env.JWT_EXPIRES_ACCESS !== undefined ? parseInt(process.env.JWT_EXPIRES_ACCESS) : null,
    JWT_EXPIRES_REFRESH: process.env.JWT_EXPIRES_REFRESH !== undefined ? parseInt(process.env.JWT_EXPIRES_REFRESH) : null
}

export default config
