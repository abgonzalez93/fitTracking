import i18n from "../../i18n";

export const getServerMessages = {
    listeningOnPort: (port: number): string => i18n.__('server.listeningOnPort', { port: port.toString() })
};