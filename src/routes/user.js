import express from 'express';
import {ensureAuth} from "../middlewares/authValidation.js"
import * as controllers from "../controllers/index.js"

const router = express.Router();

router.get('/profile', ensureAuth, controllers.getProfile);

export default router;
