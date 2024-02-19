import { CreateProductRequest } from "../../models/interfaces/products/CreateProductRequest";
import { prismaClient } from "../../prisma";

class CreateProductService {
  async execute({
    name,
    amount,
    banner,
    description,
    category_id,
    price,
  }: CreateProductRequest) {
    const product = await prismaClient.product.create({
      data: {
        name: name,
        amount: Number(amount),
        banner: banner,
        description: description,
        categoryId: category_id,
        price: price,
      },
    });
    return product;
  }
}

export { CreateProductService };
