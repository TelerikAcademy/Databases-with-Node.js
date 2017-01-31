export interface IData<T> {
    add(obj: T): Promise<T>;
    getAll(): Promise<T[]>;
    getById(id: string): Promise<T>;
    search(pattern: string);
    remove(obj: T | string): Promise<T>;
    update(obj: T): Promise<T>;
}