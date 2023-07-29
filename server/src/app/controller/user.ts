import { Request, Response } from 'express'
import UserSchema from '../model/user'
import { IUserLogin, userInput } from '../interface/user'
import { generateJwt } from '../services/jwt'


export const userController = async (req: Request, res: Response) => {
    const userData = req.body as userInput

    const user = new UserSchema({
        fullName: userData.fullName,
        email: userData.email,
        password: userData.password
    })

    return user.save()
        .then(data => JSON.parse(JSON.stringify(data)))
        .then(user => {
            const token = generateJwt(user)
            user = {
                id: user._id,
                fullName: user.fullName,
                email: user.email
            }
            return res.json({ user, token })
        })
}

export const userLoginControler = async (req: Request, res: Response) => {
    const userData = req.body as IUserLogin
    let userResposne!: any

    const user = await UserSchema.findOne({ email: userData.email })
    if (user?.password === userData.password) {
        const token = generateJwt(user)

        userResposne = {
            id: user._id,
            fullName: user.fullName,
            email: user.email
        }

        return res.json({ userResposne, token })
    }
    return res.status(400).json("Cannot Login")
}