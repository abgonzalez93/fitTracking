import dotenv from 'dotenv';

dotenv.config();

export const config = {
    PORT: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    MONGODB_URI: process.env.MONGODB_URI as string,
    RECONNECTION_RETRY_TIME: 5000,
    RECONNECTION_MAX_ATTEMPS: 5
};

export default config