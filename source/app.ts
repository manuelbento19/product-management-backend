import express from "express";
import API_Routes from "./routes";
import { catchErrorMiddleware, errorMiddleware } from "./middlewares";

const app = express();
app.use(express.json());
app.use(API_Routes);
app.use(errorMiddleware.handle);
app.use(catchErrorMiddleware.handle);
export {
    app
}