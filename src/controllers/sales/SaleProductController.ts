import { Request, Response } from "express";
import { SaleProductService } from "../../services/sales/SaleProductService";
import { SaleRequest } from "../../models/interfaces/sales/SaleRequest";

class SaleProductControllet {
    async handle (request: Request, response: Response) {
        const product_id = request.query.product_id as string
        const {amount} : SaleRequest = request.body

        const saleProductService = new SaleProductService()
        const productSold = await saleProductService.execute({
            product_id,
            amount
        })
        return response.json(productSold)
    }
}

export { SaleProductControllet}