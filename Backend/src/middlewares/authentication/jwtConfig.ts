// External Libraries
import { ErrorHandler } from '@middlewares/errorHandler'

// Constants
import httpStatus from '@constants/httpStatus'

// Configs and Messages
import config from '@config/config'
import { getAuthenticationMessages } from '@config/i18n/messages'

const msg = getAuthenticationMessages.authentication

export const getJwtConfig = (): { jwtSecretAccess: string, jwtSecretRefresh: string, jwtExpiresAccess: number, jwtExpiresRefresh: number } => {
    const jwtSecretAccess = config.JWT_SECRET_ACCESS
    const jwtSecretRefresh = config.JWT_SECRET_REFRESH
    const jwtExpiresAccess = config.JWT_EXPIRES_ACCESS
    const jwtExpiresRefresh = config.JWT_EXPIRES_REFRESH

    if (jwtSecretAccess === null || jwtSecretRefresh === null) {
        throw new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, msg.invalidToken)
    }

    if (jwtExpiresAccess === null || jwtExpiresRefresh === null) {
        throw new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, msg.expiredToken)
    }

    return { jwtSecretAccess, jwtSecretRefresh, jwtExpiresAccess, jwtExpiresRefresh }
}
