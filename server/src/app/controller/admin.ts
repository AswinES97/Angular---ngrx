import { Request, Response } from 'express'
import user from '../model/user'
import UserSchema from '../model/user'


export const adminController = async (req: Request, res: Response) => {
    console.log('here')
    const users = await UserSchema.find().then(data => JSON.parse(JSON.stringify(data)))
    return res.json(users)
}