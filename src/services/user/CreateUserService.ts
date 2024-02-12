import { prismaClient } from "../../prisma";
import { hash } from "bcryptjs";
import { CreateUserRequest } from "../../models/interfaces/users/CreateUserRequest";

class CreateUserService {
  async execute({ name, email, password }: CreateUserRequest) {
    if (!email) {
      throw new Error('Please enter an email')
    }

    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    })

    if (userAlreadyExists) {
      throw new Error("User already exists")
    }

    // Encrypting password
    const passwordHash = await hash(password, 8)

      // User Creation
    const user = prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash
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

export { CreateUserService }
