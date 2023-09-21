import { PrismaClient } from "@prisma/client";

import { UUID, randomUUID } from "crypto";

export class ProductDto {
  readonly id: UUID;
  readonly name: string;
  readonly price: number;
  readonly description: string;
  readonly categoryId: string;

  constructor(
    id: UUID,
    name: string,
    price: number,
    description: string,
    categoryId: string,
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.categoryId = categoryId;
  }

  static new(
    name: string,
    price: number,
    description: string,
    categoryId: string,
  ) {
    return new ProductDto(randomUUID(), name, price, description, categoryId);
  }
}

export class ProductModel {
  private readonly prismaClient = new PrismaClient();

  async save(productDto: ProductDto): Promise<object> {
    await this.prismaClient.$connect();
    const product = await this.prismaClient.product.create({
      data: productDto,
    });
    await this.prismaClient.$disconnect();

    return product;
  }
}
