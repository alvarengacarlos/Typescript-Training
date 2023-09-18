import { describe, test, expect } from "@jest/globals";
import supertest from "supertest";

const baseUrl = "http://localhost:3000/api/v1";

describe("app", () => {
  describe("GET /current-velocity", () => {
    test("should return the current velocity", async () => {
      const response = await supertest(baseUrl).get("/current-velocity");

      expect(response.status).toEqual(200);
      expect(response.body).toEqual({ currentVelocity: 0 });
    });
  });

  describe("GET /is-on", () => {
    test("should return if is on", async () => {
      const response = await supertest(baseUrl).get("/is-on");

      expect(response.status).toEqual(200);
      expect(response.body).toEqual({ isOn: false });
    });
  });

  describe("POST /increase-velocity", () => {
    test("should on fun", async () => {
      const response = await supertest(baseUrl).post("/increase-velocity");

      expect(response.status).toEqual(200);
    });
  });

  describe("POST /decrease-velocity", () => {
    test("should on fun", async () => {
      const response = await supertest(baseUrl).post("/decrease-velocity");

      expect(response.status).toEqual(200);
    });
  });
});
