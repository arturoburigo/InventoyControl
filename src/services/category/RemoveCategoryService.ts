import { RemoveCategoryRequest } from "../../models/interfaces/category/RemoveCategoryRequest";
import { prismaClient } from "../../prisma";

class RemoveCategoryService {
  async execute({ category_id }: RemoveCategoryRequest) {
    if (!category_id || category_id === "" || category_id === undefined) {
      throw new Error("Please enter a category id");
    }

    const removeCategory = await prismaClient.category.delete({
      where: {
        id: category_id,
      },
      select: {
        id: true,
        name: true,
      },
    });
    return removeCategory;
  }
}

export { RemoveCategoryService };
