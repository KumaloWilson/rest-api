import { Router } from "express";
import { getUsers, getUserByID, addUser, updateUserById, deleteUserById } from "../controllers/user.controller";
import { authenticateToken } from "../middlewares/auth.middleware";

const router = Router();

router.get("/", authenticateToken, getUsers);
router.get("/:id", authenticateToken, getUserByID);
router.post("/", authenticateToken, addUser);
router.put("/:id", authenticateToken, updateUserById);
router.delete("/:id", authenticateToken, deleteUserById);

export default router;