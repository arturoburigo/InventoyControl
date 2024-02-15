import { Request, Response } from "express";
import { EditCategoryService } from "../../services/category/EditCategoryService";

class EditCategoryController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;
    const category_id = request.query.category_id as string;
    const editCategoryService = new EditCategoryService();
    const editCategory = await editCategoryService.execute({
      name,
      category_id,
    });
    return response.json(editCategory);
  }
}

export { EditCategoryController };
