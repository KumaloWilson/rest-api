import { Router } from "express";
import { getUsers, getUserByID, addUser, updateUserById, deleteUserById } from "../controllers/user.controller";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUserByID);
router.post("/", addUser);
router.put("/:id", updateUserById);
router.delete("/:id", deleteUserById);

export default router;