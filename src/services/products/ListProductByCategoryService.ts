import { prismaClient } from "../../prisma";

interface ListProductInterface {
  category_id: string;
}

class ListProductByCategoryService {
  async execute({ category_id }: ListProductInterface) {
    const listProducts = await prismaClient.product.findMany({
      where: {
        categoryId: category_id,
      },
    });
    return listProducts;
  }
}

export { ListProductByCategoryService };
