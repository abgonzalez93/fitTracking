import path from 'path'
import dotenv from 'dotenv'
import app from './app'
import databaseConnection from '@database/databaseConnection'
import SignalHandler from '@utils/processSignals'
import config from '@config/config'

console.log(process.env)

dotenv.config({ path: path.resolve(__dirname, '../.env') })

const { PORT: port } = config

// Handle nodemon restarts and application termination
SignalHandler.handleNodemonRestarts()
SignalHandler.handleAppTermination()

// Connect to the database
databaseConnection.startApp(app, port)