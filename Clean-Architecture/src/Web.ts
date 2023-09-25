import { UserController } from "./UserController";

export class Web {
  constructor(private readonly userController: UserController) {}

  clickToCreateUser() {
    const request = {
      body: {
        email: 'johndoe@email.com',
        password: 'JohnDoe@123'
      }
    }

    const response = this.userController.createUser(request)

    console.log(`
      <html>
        <title>Create User</title>
        <body>
          <span>Create with success</span>
          <span>${response.body.id}</span>
          <span>${response.body.email}</span>
        </body>
      </html>
    `)
  }
}