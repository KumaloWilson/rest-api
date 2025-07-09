import express from 'express';
import { getUserById, getUsers, createUser } from '../controllers/user.controller';


const router = express.Router();

router.get("/", getUsers)
router.get("/:id", getUserById);
router.post("/", createUser);



export default router;