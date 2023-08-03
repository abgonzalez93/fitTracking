// External Libraries
import { type Express } from 'express'

// Utils
import logger from '@utils/logger'

// Configs and Messages
import config from '@config/config'
import { getServerMessages } from '@i18n/messages'

const { PORT: port } = config

const startApp = (app: Express): void => {
    app.listen(port, () => {
        logger.info(getServerMessages.listeningOnPort(port))
    })
}

export default startApp
