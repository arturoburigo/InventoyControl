import { prismaClient } from "../../prisma"

class GetUserByIdService {
  async execute(user_id: string) {

    if (user_id) {
      const user = await prismaClient.user.findFirst({
        where: {
          id: user_id
        },
        select: {
          id: true,
          name: true,
          email: true,
        }
      })
      return user
    }
  }
}
export { GetUserByIdService }
