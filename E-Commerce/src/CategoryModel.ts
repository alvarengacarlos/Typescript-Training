import { PrismaClient } from "@prisma/client";
import { UUID, randomUUID } from "crypto";

export class CategoryDto {
  readonly id: UUID;
  readonly name: string;

  constructor(id: UUID, name: string) {
    this.id = id;
    this.name = name;
  }

  static new(name: string) {
    return new CategoryDto(randomUUID(), name);
  }
}

export class CategoryModel {
  private readonly prismaClient = new PrismaClient();

  async save(categoryDto: CategoryDto): Promise<object> {
    await this.prismaClient.$connect();
    const category = await this.prismaClient.category.create({
      data: categoryDto,
    });
    await this.prismaClient.$disconnect();

    return category;
  }
}
