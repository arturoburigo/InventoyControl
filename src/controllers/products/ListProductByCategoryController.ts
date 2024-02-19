import { Request, Response } from "express";
import { ListProductByCategoryService } from "../../services/products/ListProductByCategoryService";

class ListProductByCategoryController {
  async handle(request: Request, response: Response) {
    const category_id = request.query.category_id as string;
    const listProductByCategoryService = new ListProductByCategoryService();
    const listProduct = await listProductByCategoryService.execute({
      category_id,
    });
    return response.json(listProduct);
  }
}

export { ListProductByCategoryController };
