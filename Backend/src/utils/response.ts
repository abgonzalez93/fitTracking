export function createResponse (httpStatusCode: number, status: string, message: string, data?: any): [number, object] {
    return [
        httpStatusCode,
        {
            status,
            message,
            data
        }
    ]
}
