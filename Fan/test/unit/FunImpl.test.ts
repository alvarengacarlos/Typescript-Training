import { describe, test, expect, beforeEach } from "@jest/globals";

import FunImpl from "../../src/FunImpl";

describe("FunImpl", () => {
  let fun: FunImpl;
  beforeEach(() => {
    fun = new FunImpl();
  });

  test("should return the current velocity", () => {
    const currentVelocity = fun.getCurrentVelocity();

    expect(currentVelocity).toEqual(0);
  });

  test("should increase the velocity", () => {
    expect(fun.getCurrentVelocity()).toEqual(0);

    fun.increaseVelocity();
    expect(fun.getCurrentVelocity()).toEqual(1);

    fun.increaseVelocity();
    expect(fun.getCurrentVelocity()).toEqual(2);

    fun.increaseVelocity();
    expect(fun.getCurrentVelocity()).toEqual(3);

    fun.increaseVelocity();
    expect(fun.getCurrentVelocity()).toEqual(3);
  });

  test("should decrease the velocity", () => {
    fun.increaseVelocity();
    fun.increaseVelocity();
    fun.increaseVelocity();

    expect(fun.getCurrentVelocity()).toEqual(3);

    fun.decreaseVelocity();
    expect(fun.getCurrentVelocity()).toEqual(2);

    fun.decreaseVelocity();
    expect(fun.getCurrentVelocity()).toEqual(1);

    fun.decreaseVelocity();
    expect(fun.getCurrentVelocity()).toEqual(0);

    fun.decreaseVelocity();
    expect(fun.getCurrentVelocity()).toEqual(0);
  });
});
