import { Request, Response, NextFunction } from "express"
import { AppError } from "@/utils/AppError"
import { knex } from "@/database/knex"
import { z } from "zod"

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

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const bodySchema = z.object({
        name: z.string().trim().min(3),
        price: z.number().gt(0, { message: "Price must be greater than 0" }),
        stock: z
          .number()
          .int()
          .min(0, { message: "Stock must be zero or positive" }),
        description: z
          .string()
          .trim()
          .min(10, {
            message: "Description must be at least 10 characters long",
          })
          .max(255, { message: "Description too long" }),
      })

      const { name, price, stock, description } = bodySchema.parse(request.body)

      await knex<ProductRepository>("products").insert({
        name,
        price,
        stock,
        description,
      })

      response.status(201).json()
    } catch (error) {
      next(error)
    }
  }
}
