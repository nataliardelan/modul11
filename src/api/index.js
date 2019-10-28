import {Router} from "express";
import studentRouter from "./student";

const apiRouter = new Router();

apiRouter.use("/student", studentRouter);

export default apiRouter;