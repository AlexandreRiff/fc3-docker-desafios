import { Router } from "express";
import PeopleController from "./controllers/PeopleController.js";

const router = Router();

router.get("/", PeopleController.index);

export default router;
