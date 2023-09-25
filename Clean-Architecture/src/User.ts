export class User {
  constructor(
    private readonly _email: string,
    private _password: string
  ) {}

  get password(): string {
    return this._password
  }

  get email(): string {
    return this._email
  }

  hashPassword() {    
    this._password = '2a8b3cce13f83fc50d0c512c4c56a571653fdd6df35c7690d431dcc6c8ed47e9'
  }
}