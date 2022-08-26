export interface IItemRepository<T, U> {
  getAll(): Promise<T[]>
  delete(id: T): Promise<void>
  update(items: T[], id: U): Promise<T>
  create(item: T): Promise<T>
  getById(id: U): Promise<T>
}

export default IItemRepository
