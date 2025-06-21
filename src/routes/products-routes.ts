import { Router } from "express"
import { ProductController } from "@/controllers/products-controllers"

export const productRoutes = Router()

const productController = new ProductController()

productRoutes.get("/", productController.index)
productRoutes.post("/", productController.create)
productRoutes.put("/:id", productController.update)
productRoutes.delete("/:id", productController.remove)
