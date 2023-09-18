import Koa from "koa";
import KoaRouter from "@koa/router";

import FunImpl from "./FunImpl";

const app = new Koa({
  env: "production",
});
const koaRouter = new KoaRouter({
  prefix: "/api/v1",
});
const funImpl = new FunImpl();

koaRouter.get("/current-velocity", (ctx) => {
  const currentVelocity = funImpl.getCurrentVelocity();
  ctx.body = { currentVelocity };
  ctx.type = "application/json";
  ctx.status = 200;
});

koaRouter.get("/is-on", (ctx) => {
  const isOn = funImpl.isOn();
  ctx.body = { isOn };
  ctx.type = "application/json";
  ctx.status = 200;
});

koaRouter.post("/increase-velocity", (ctx) => {
  funImpl.increaseVelocity();
  ctx.type = "application/json";
  ctx.status = 200;
});

koaRouter.post("/decrease-velocity", (ctx) => {
  funImpl.decreaseVelocity();
  ctx.type = "application/json";
  ctx.status = 200;
});

app.use(koaRouter.routes());
app.use(koaRouter.allowedMethods());

export default app;
