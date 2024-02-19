import { Request, Response } from "express";
import { EditProductRequest } from "../../models/interfaces/products/EditProductRequest";
import { EditProductService } from '../../services/products/EditProductService'

class EditProductController {
  async handle(request: Request, response: Response) {
    const {
      name,
      amount,
      banner,
      product_id,
      description,
      price,
    }: EditProductRequest = request.body;

    const editProductService = new EditProductService();

    const productEdited = editProductService.execute({
      name,
      amount,
      banner,
      product_id,
      description,
      price
    })
    
    return response.json(productEdited);
  }
}


export { EditProductController };
