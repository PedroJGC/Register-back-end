import { Request, Response, NextFunction } from "express"
import { knex } from "@/database/knex"

export class ProductController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const { name } = request.query

      const products = await knex<ProductRepository>("products")
        .select()
        .whereLike("name", `%${name ?? ""}%`)

      response.json(products)
    } catch (error) {
      next(error)
    }
  }
}
