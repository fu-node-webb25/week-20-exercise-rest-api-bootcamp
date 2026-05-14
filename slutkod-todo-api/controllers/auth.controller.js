import { keys } from "../data/keys.data.js";
import { users } from "../data/users.data.js";
import { createUser } from "../utils/users.utils.js";

export const registerUser = (req, res, next) => {
    const user = req.body;
    if(users.some(u => u.username === user.username)) {
        next({
            status : 400,
            message : 'Username already exists'
        });
    }

    const newUser = createUser(user);
    users.push(newUser);
    res.status(201).json({
        success : true,
        message : 'New user registered successfully',
        user : newUser
    });
}

export const loginUser = (req, res, next) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if(!user) {
        next({
            status : 400,
            message : 'Invalid username or password'
        });
    }

    res.json({
        success : true,
        message : 'User logged in successfully',
        key : keys[Math.floor(Math.random() * keys.length)]
    });
}