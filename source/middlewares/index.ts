import { AuthenticationMiddleware } from "./AuthenticationMiddleware"
import { ErrorMiddleware } from "./ErrorMiddleware"
import { CatchErrorMiddleware } from "./CatchErrorMiddleware"

const authenticationMiddleware = new AuthenticationMiddleware()
const catchErrorMiddleware = new CatchErrorMiddleware()
const errorMiddleware = new ErrorMiddleware()

export {
    authenticationMiddleware,
    errorMiddleware,
    catchErrorMiddleware,
}