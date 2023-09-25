import { UserRequest } from "./UserRequest";
import { UserResponse } from "./UserResponse";

export interface UserController {
  createUser(request: UserRequest): UserResponse
}