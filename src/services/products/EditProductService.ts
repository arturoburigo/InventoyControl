import { EditProductRequest } from '../../models/interfaces/products/EditProductRequest'
import { prismaClient } from '../../prisma'


class EditProductService {
  async execute({ name, amount, banner, product_id, description, price }: EditProductRequest) {
    const editedProduct = await prismaClient.product.update({
      where: {
        id: product_id
      },
      data: {
        name: name,
        amount: +amount,
        banner: banner, 
        description: description,
        price: price,
      }
    })
    return editedProduct
  }
}

export { EditProductService }
