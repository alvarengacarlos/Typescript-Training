import { Request, Response } from "express";
import { ProductDto, ProductModel } from "./ProductModel";

export class ProductController {
  static async create(request: Request, response: Response) {
    const productDto = ProductDto.new(
      request.body.name,
      request.body.price,
      request.body.description,
      request.body.categoryId,
    );

    const productModel = new ProductModel();
    await productModel.save(productDto);

    response
      .status(201)
      .json({ message: "created with success", data: productDto });
  }
}
