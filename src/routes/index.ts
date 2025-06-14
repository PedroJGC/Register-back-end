import { Router } from "express"

import { productRouter } from "./products-routes"

export const routes = Router()
routes.use("/products", productRouter)

// 713-5
