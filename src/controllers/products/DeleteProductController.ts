import { Request, Response, response } from "express";
import {DeleteProductService } from '../../services/products/DeleteProductService'

class DeleteProductController {
  async handle(request: Request, response: Response) {
    const product_id = request.query.product_id as string;
    const removeProduct = new DeleteProductService()
    const removedProduct = await removeProduct.execute({product_id})
    return response.json(removedProduct);
  }
}
export { DeleteProductController };
