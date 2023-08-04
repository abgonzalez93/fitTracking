// External Libraries
import { type Express } from 'express'

// Utils
import logger from '@utils/logger'

// Config
import config from '@config/config'

// Messages
import { getServerMessages } from '@i18n/messages'

const { PORT: port } = config

const startApp = (app: Express): void => {
    app.listen(port, () => {
        logger.info(getServerMessages.listeningOnPort(port))
    })
}

export default startApp
