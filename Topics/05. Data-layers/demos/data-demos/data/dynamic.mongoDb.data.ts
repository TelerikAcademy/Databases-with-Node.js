import { Db } from "mongodb";

import { IData } from "./base.data";

export class DynamicMongoDbData<T> implements IData<T> {
    public db: Db;
    public collectionName: string;

    constructor(db: Db, collectionName: string) {
        this.db = db;
        this.collectionName = collectionName;
    }

    public add(obj: T): Promise<T> {
        return this.db.collection(this.collectionName)
            .insertOne(obj)
            .then(() => obj);
    }

    public getAll(): Promise<T[]> {
        return this.db.collection(this.collectionName)
            .find()
            .toArray();
    }
    getById(id: string): Promise<T> {
        return null;
    }
    search(pattern: string) {
        return null;
    }

    remove(obj: T | string): Promise<T> {
        return null;
    }

    update(obj: T): Promise<T> {
        return null;
    }
}
