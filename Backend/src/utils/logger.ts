import { ErrorHandler } from '@middlewares/errorHandler';

export default {
    info: (message: string) => {
        console.log(message);
    },
    error: (error: ErrorHandler | Error) => {
        console.error(error);
    }
};