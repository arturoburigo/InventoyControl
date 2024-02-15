import { Request, Response } from "express";
import { CategoryRequest } from "../../models/interfaces/category/CategoryRequest";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

class CreateCategoryController {
  async handle(request: Request, response: Response) {
    const { name }: CategoryRequest = request.body;

    const categoryService = new CreateCategoryService();

    const category = await categoryService.execute({ name });

    return response.json(category);
  }
}

export { CreateCategoryController };
