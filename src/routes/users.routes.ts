import express from 'express';
import { getUsers } from '../controllers/user.controller';


const router = express.Router();

router.get("/", getUsers)
router.get("/getUsers", getUsers)
router.get("/findUsers", getUsers)
router.get("/users", getUsers)


export default router;