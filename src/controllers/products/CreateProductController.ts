import { CreateProductRequest } from "../../models/interfaces/products/CreateProductRequest";
import { CreateProductService } from "../../services/products/CreateProductService";
import { Request, Response } from "express";

class CreateProductController {
  async handle(request: Request, response: Response) {
    const {
      name,
      amount,
      banner,
      description,
      category_id,
      price,
    }: CreateProductRequest = request.body;
    const createProductService = new CreateProductService();

    if (!request.file) {
      throw new Error("File not found");
    } else {
      const { originalname, filename: banner } = request.file;
      const product = await createProductService.execute({
        name,
        amount,
        banner,
        category_id,
        description,
        price
      });
      return response.json(product);
    }
  }
}

export { CreateProductController };
