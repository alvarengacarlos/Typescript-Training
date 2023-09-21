import { Request, Response } from "express";
import { CategoryDto, CategoryModel } from "./CategoryModel";

export class CategoryController {
  static async create(request: Request, response: Response) {
    const categoryDto = CategoryDto.new(request.body.name);
    const categoryModel = new CategoryModel();
    await categoryModel.save(categoryDto);

    response
      .status(201)
      .json({ message: "created with success", data: categoryDto });
  }
}
