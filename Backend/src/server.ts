// External Libraries
import path from 'path'
import dotenv from 'dotenv'

// Utils
import SignalHandler from '@utils/processSignals'
import startApp from '@utils/startApp'

// Local files
import app from './app'

dotenv.config({ path: path.resolve(__dirname, '../.env') })

SignalHandler.handleNodemonRestarts()
SignalHandler.handleAppTermination()

startApp(app)
