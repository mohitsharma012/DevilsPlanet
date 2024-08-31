import jwt from 'jsonwebtoken';
const isAuthorized = async (req, res, next) => {
    const token = req.header('token');
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }    
    try {
        const token_decode =  jwt.verify(token, process.env.JWT_SECRET);
        req.user = token_decode;
        next();
    } catch (error) {
        console.error( "Error at Authorization",error.message);
        return res.json({success:false,message:error.message});
    }
};

export default isAuthorized;
