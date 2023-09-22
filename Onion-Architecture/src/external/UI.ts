import { Domain } from "../core/Domain"
import { Repository } from "../core/Repository"

export class UI {
  constructor(
    private readonly domain: Domain,
    private readonly repository: Repository<number, object>
  ) {}

  clickToCreate() {
    this.repository.save({})
  }

  clickToGetById() {
    this.repository.find(0)
  }

  clickToGetAll() {
    this.repository.findAll(0)
  }

  clickToUpdate() {
    this.repository.update({})
  }

  clickToDelete() {
    this.repository.delete(0)
  }

  clickToDoSomeThing() {
    this.domain.someBusinessRule()    
  }
}