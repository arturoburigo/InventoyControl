import { prismaClient } from "../../prisma";

interface DeleteProductInterface {
  product_id: string;
}

class DeleteProductService {
  async execute({ product_id }: DeleteProductInterface) {
    const deletedProduct = await prismaClient.product.delete({
      where: {
        id: product_id
      },
    });
    return deletedProduct;
  }
}

export { DeleteProductService };
