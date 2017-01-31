import { Db } from "mongodb";

import { IData } from "./base.data";
import { Log } from "./../models/log.model";

const COLLECTION_NAME = "logs";

export class LogsDbData implements IData<Log> {
    public db: Db;

    constructor(db: Db) {
        this.db = db;
    }

    public add(obj: Log): Promise<Log> {
        return this.db.collection(COLLECTION_NAME)
            .insertOne(obj)
            .then(() => obj);
    }

    public getAll(): Promise<Log[]> {
        return this.db.collection(COLLECTION_NAME)
            .find()
            .toArray();
    }
}
