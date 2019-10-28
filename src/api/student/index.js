import { Router } from 'express';
import studentControler from './controler.js';

const studentRouter = new Router();

studentRouter.get("/", studentControler.get);
studentRouter.get("/average", studentControler.getAverage);
studentRouter.post("/", studentControler.post);
studentRouter.delete("/", studentControler.delete_id);

export default studentRouter;