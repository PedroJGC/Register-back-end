import { Router } from "express"
import { ProductController } from "@/controllers/products-controllers"

export const productRouter = Router()

const productController = new ProductController()

productRouter.get("/", productController.index)
