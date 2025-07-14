import { User } from "../models/user.model";

export const getAllUsers = async () => {
    try {
        const users = await User.findAll();

        return users;
    } catch (error) {
        throw new Error('Failed to fetch users');
    }
};

export const findUserByID = async (id: number) => {
    try {
        const user = await User.findByPk(id);
        return user;
    }

    catch(error){
        throw new Error('Failed to fetch user');
    }
}


export const createUser = async (userData: any) => {
    try {
        const user = await User.create(userData);
        return user;
    }
    catch (error) {
        throw new Error('Failed to create user');
    }
}

export const getUserByEmail = async (email: string) => {
    try {
        const user = await User.findOne({ where: { email } });
        return user;
    }
    catch (error) {
        throw new Error('Failed to fetch user');
    }
}

export const updateUser = async (id: number, userData: any) => {
    try {
        const user = await User.findByPk(id);

        if (!user) {
            throw new Error('User not found');
        }
        await user.update(userData);
        return user;
    }

    catch (error) {
        throw new Error('Failed to update user')
    }
}

export const deleteUser = async (id: number) => {
    try {
        const user = await User.findByPk(id);
        if (!user) {
            throw new Error('User not found');
        }
        await user.destroy();
        return true;
    }
    catch (error) {
        throw new Error('Failed to delete user');
    }
}