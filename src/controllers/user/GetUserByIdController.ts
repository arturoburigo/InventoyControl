import {Request, Response} from 'express'
import { GetUserByIdService } from '../../services/user/GetUserByIdService'

class GetUserByIdController {
    async handle (request: Request, response: Response ) {
        const user_id = request?.user_id
        const getUserbyIdService = new GetUserByIdService()
        const getUser = await getUserbyIdService.execute(user_id)
        return response.json(getUser)
    }
}

export {GetUserByIdController}