import users from "../data/user";
import { User } from "../models/user.model";

export const findAllUsers = (): User[] => {
    return users;
}