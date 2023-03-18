export interface IBaseRepository<TEntity> {
    addAsync(entity: TEntity): Promise<void>;
}