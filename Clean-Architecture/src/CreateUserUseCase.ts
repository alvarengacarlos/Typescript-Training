import { User } from "./User"
import { UserRepository } from "./UserRepository"

export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  execute(input: Input): Output {
    const user = new User(input.email, input.password)
    user.hashPassword()
    return {
      id: '1',
      email: input.email
    }
  }
}

export type Input = {
  email: string
  password: string
}

export type Output = {
  id: string
  email: string
}