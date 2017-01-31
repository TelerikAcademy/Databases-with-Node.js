import { Db } from "mongodb";

import { IData } from "./../data/base.data";
import { DynamicMongoDbData } from "./../data/dynamic.mongoDb.data";
import { IProvider } from "./base.provider";

export class MongoDbDataProvider implements IProvider {
    public db: Db;

    constructor(db: Db) {
        this.db = db;
    }

    provide<T>(type: string): IData<T> {
        const data: IData<T> =
            new DynamicMongoDbData<T>(this.db, type);
        return data;
    }
}