import {configureDb} from "../controllers/data.controller.js";
import express from "express";

const router = express.Router();

router.post('/configure', configureDb);

export default router;