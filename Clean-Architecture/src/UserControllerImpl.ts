import { CreateUserUseCase } from "./CreateUserUseCase";
import { UserController } from "./UserController";
import { UserRepository } from "./UserRepository";
import { UserRequest } from "./UserRequest";
import { UserResponse } from "./UserResponse";

export class UserControllerImpl implements UserController {
  constructor(private readonly userRepository: UserRepository) {}

  createUser(request: UserRequest): UserResponse {
    const useCase = new CreateUserUseCase(this.userRepository)    
    const output = useCase.execute({
      email: request.body.email,
      password: request.body.password
    })

    return {
      body: {
        id: output.id,
        email: output.email
      }
    }
  }
}