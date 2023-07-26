import i18n from '@config/i18n/i18n'

export const getServerMessages = {
  listeningOnPort: (port: number): string => i18n.__('server.listeningOnPort', { port: port.toString() })
}
