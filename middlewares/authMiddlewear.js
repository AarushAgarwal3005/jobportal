import JWT from 'jsonwebtoken';
const userAuth = async (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        next('auth failed')
    }
    const token = authHeader.split(" ")[1] //the 0th place is bearer and the 1st is the token in jwt ---- header--payload---signature
    try {
        const payload = JWT.verify(token, process.env.JWT_SECRET) //data is in payload....we decrypy by secret key 
        req.user = {
            userId: payload.userId
        }
        next()
    } catch (error) {
        next('auth failed')
    }
}
export default userAuth