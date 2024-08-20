import 'dotenv/config'
import jwt from 'jsonwebtoken'
const {sign, verify} = jwt

function createToken(user) {
    return sign(
        {
            emailAddress: user.userEmail,
            password: user.password
        },
        process.env.SECRET_KEY,
        {
            expiresIn: '1.5h'
        }
    )
}
function verifyToken(req, res, next) {
    
    const token = req.headers['Authorization']
    if(token) {
        if(verify(token, process.env.SECRET_KEY)){
            next()
        }else {
            res?.json({
                status: res.statusCode,
                msg: "Please provide the correct details."
            })
        }
    }else {
        res.json({
            status: res.statusCode,
            msg: "Please login."
        })
    }
}
export {
    createToken,
    verifyToken
}