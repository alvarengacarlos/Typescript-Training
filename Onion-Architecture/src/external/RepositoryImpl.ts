import { Repository } from "../core/Repository"

export class RepositoryImpl implements Repository<number, object> {
  save(entity: object): object {
    return {}
  }

  find(id: number): object {
    return {}
  }

  findAll(page: number): object[] {
    return [{}]
  }

  update(entity: object): object {
    return {}
  }
  
  delete(id: number): object {
    return {}
  }
}