import { prismaClient } from "../../prisma";
import {AuthRequest} from '../../models/interfaces/auth/AuthRequest'
import { compare } from "bcryptjs";
import {sign} from 'jsonwebtoken'


class AuthUserService{
    
    async execute({email, password}: AuthRequest){

        if (!email){
            throw new Error ('Please enter an email.')
        }

        if (!password) {
            throw new Error ('Plese enter a password.')
        }

        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (!user) {
            throw new Error ('Please Sign Up first.')
        }

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new Error ("Wrong password")
        }

        const token = sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET as string,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        ) 

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        }

    }
}

export {AuthUserService}