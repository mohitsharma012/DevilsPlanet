import jwt from 'jsonwebtoken';

const isAuthorized = async (req, res, next) => {
    const token = req.header('token');

    // Check if token exists
    if (!token) {
        return res.status(401).json({ error: "Please authenticate using a valid token", success: false });
    }    
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = token_decode;
        next();
    } catch (error) {
        return res.json({ success: false, message: "Invalid token" });
    }
};

export default isAuthorized;
