import { SaleRequest } from "../../models/interfaces/sales/SaleRequest";
import { prismaClient } from "../../prisma";

class SaleProductService {
    async execute({amount, product_id}: SaleRequest) {
        if (!product_id || product_id === "" || product_id === undefined) {
            throw new Error("Please enter a product id");
        }
        if (!amount || amount === 0 || amount === undefined) {
            throw new Error("Please enter a valid amount");
        }

        const queryProduct = await prismaClient.product.findFirst({
            where: {  
                id: product_id
            }
        })

        if (queryProduct?.amount > amount && amount > 0 ) {
            const newAmount = (queryProduct.amount - amount
)
            const updateProduct = await prismaClient.product.update({
                where: {
                    id: product_id
                },
                data: {
                    amount: newAmount
                },
                select: {
                    id: true,
                    name: true,
                    amount: true,
                    price: true
                }
            })
            return updateProduct
        }
    }
}

export {SaleProductService}