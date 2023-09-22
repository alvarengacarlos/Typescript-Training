export interface Repository<K, T> {
  save(entity: T): T
  find(id: K): T
  findAll(page: number): Array<T>
  update(entity: T): T
  delete(id: K): T
}
