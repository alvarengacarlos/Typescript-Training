import { UserControllerImpl } from "./UserControllerImpl";
import { UserRepositoryImpl } from "./UserRepositoryImpl";
import { Web } from "./Web";

const repository = new UserRepositoryImpl()
const controller = new UserControllerImpl(repository)
const web = new Web(controller)
web.clickToCreateUser()