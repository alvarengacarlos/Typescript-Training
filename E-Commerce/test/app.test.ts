import {
  describe,
  test,
  beforeAll,
  afterAll,
  beforeEach,
  expect,
} from "@jest/globals";
import supertest from "supertest";

import { PrismaClient } from "@prisma/client";

import app from "../src/app";

describe("main", () => {
  const prismaClient = new PrismaClient();
  beforeAll(async () => {
    await prismaClient.$connect();
  });

  afterAll(async () => {
    await prismaClient.$disconnect();
    await prismaClient.product.deleteMany();
    await prismaClient.category.deleteMany();
  });

  beforeEach(async () => {
    await prismaClient.product.deleteMany();
    await prismaClient.category.deleteMany();
  });

  describe("/categories", () => {
    describe("POST", () => {
      test("should save a category", async () => {
        const response = await supertest(app).post("/api/v1/categories").send({
          name: "food",
        });

        expect(response.status).toEqual(201);
        expect(response.body).toMatchObject({
          message: "created with success",
          data: {
            name: "food",
          },
        });

        const category = await prismaClient.category.findFirst({
          where: { id: response.body.data.id },
        });
        expect(category).toMatchObject({
          name: "food",
        });
      });
    });
  });

  describe("/products", () => {
    describe("POST", () => {
      test("should save a product", async () => {
        const response0 = await supertest(app).post("/api/v1/categories").send({
          name: "food",
        });
        const categoryId = response0.body.data.id;

        const response1 = await supertest(app).post("/api/v1/products").send({
          name: "Cheese",
          price: 12.45,
          description: "The best cheese of the world",
          categoryId: categoryId,
        });

        expect(response1.status).toEqual(201);
        expect(response1.body).toMatchObject({
          message: "created with success",
          data: {
            name: "Cheese",
            price: 12.45,
            description: "The best cheese of the world",
            categoryId: categoryId,
          },
        });

        const product = await prismaClient.product.findFirst({
          where: { id: response1.body.data.id },
        });
        expect(product).toMatchObject({
          name: "Cheese",
          price: 12.45,
          description: "The best cheese of the world",
          categoryId: categoryId,
        });
      });
    });
  });
});
