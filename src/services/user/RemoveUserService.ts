import { RemoveUserRequest } from "../../models/interfaces/users/RemoveUserRequest";
import { prismaClient } from "../../prisma";


class RemoveUserService { 
    async execute({user_id}: RemoveUserRequest) {
        if (user_id) {
            const user = await prismaClient.user.delete({
                where: {
                    id: user_id
                },
                select: {
                    id: true,
                }
            })
            return user
        }
    }
}

export {RemoveUserService}