import { EditCategoryRequest } from "../../models/interfaces/category/EditCategoryRequest";
import { prismaClient } from "../../prisma";

class EditCategoryService {
  async execute({ name, category_id }: EditCategoryRequest) {
    if (!name || name === "" || name === undefined) {
      throw new Error("Please enter a category Name");
    }

    const category = await prismaClient.category.update({
      where: {
        id: category_id,
      },
      data: {
        name: name,
      },
      select: {
        id: true,
        name: true,
      },
    });
    return category;
  }
}

export { EditCategoryService };
