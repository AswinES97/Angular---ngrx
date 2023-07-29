import jwt from 'jsonwebtoken'

export function generateJwt(data: any) {
    return jwt.sign({data},'aswines@123',{expiresIn: '24h'})
}