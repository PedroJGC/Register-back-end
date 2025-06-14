import { Request, Response, NextFunction } from "express"

export class ProductController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      response.json({ message: "Hello World" })
    } catch (error) {
      next(error)
    }
  }
}
