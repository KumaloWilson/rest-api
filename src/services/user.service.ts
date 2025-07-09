import users from "../data/user";
import { User } from "../models/user.model";

export const findAllUsers = (): User[] => {
    return users;
}

export const findUserById = (id: number): User | undefined => {
    return users.find(user => user.id === id);
}


export const addUser = (name: string, email: string) : User => {

    const newUser: User = {
        id: users.length + 1,
        name: name,
        email: email
    };

    users.push(newUser);
    
    return newUser;
}