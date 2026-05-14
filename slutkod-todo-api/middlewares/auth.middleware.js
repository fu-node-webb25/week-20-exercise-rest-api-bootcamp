import { keys } from "../data/keys.data.js";

export const authenticateUser = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if(!apiKey) {
        return res.status(401).json({
            success : false,
            message : 'No API key provided'
        });
    }
    if(!keys.includes(apiKey)) {
        return res.status(403).json({
            success : false,
            message : 'Invalid API key'
        });
    }
    next();
}