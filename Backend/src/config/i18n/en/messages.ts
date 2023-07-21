import { dietMessages, nutritionalGoalsMessages, userMessages } from "./components";
import { databaseMessages } from "./database/databaseMessages";
import { errorHandlerMessages } from "./middlewares/errorHandlerMessages";

const messages = {
    src: {
        components: {
            user: userMessages,
            nutritionalGoals: nutritionalGoalsMessages,
            diet: dietMessages
        },
        database: {
            dbConnect: databaseMessages
        },
        middlewares: {
            errorHandler : errorHandlerMessages
        },
        routes: {}
    }
};

export default messages;