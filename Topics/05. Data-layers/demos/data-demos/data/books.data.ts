import { Db } from "mongodb";

import { Book } from "./../models/book.model";
import { Log } from "./../models/log.model";
import { IData } from "./base.data";

const COLLECTION_NAME = "books";

export class BooksDbData implements IData<Book> {
    public db: Db;

    constructor(db: Db) {
        this.db = db;
    }

    public add(obj: Book): Promise<Book> {
        return this.db.collection(COLLECTION_NAME)
            .insertOne(obj)
            .then(() => obj);
    }

    public getAll(): Promise<Book[]> {
        return this.db.collection(COLLECTION_NAME)
            .find()
            .toArray();
    }
}
