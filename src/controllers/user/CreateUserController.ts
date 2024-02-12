import {Request, Response} from 'express'
import { CreateUserService } from '../../services/user/CreateUserService'
import { CreateUserRequest } from '../../models/interfaces/users/CreateUserRequest'

class CreateUserController {
    async handle (request: Request, response:Response) {
        console.log(request.body);
        const {name, password, email}: CreateUserRequest = request.body
        
        const createUserService = new CreateUserService()
        
        const user = await createUserService.execute({
            name, email, password
        })

        return response.json(user)

    }
}

export {CreateUserController}