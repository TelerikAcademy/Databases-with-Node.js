import { Document, Mongoose } from "mongoose";

import { BookModel } from "../models/mongoose/book.mongoose.model";
import { Book } from "./../models/book.model";
import { Log } from "./../models/log.model";
import { IData } from "./base.data";

export class DynamicMongooseDbData<T> implements IData<T> {
    private mongoose: Mongoose;
    private type: string;

    constructor(mongoose: Mongoose, type: string) {
        this.mongoose = mongoose;
        this.type = type;
    }

    add(obj: T): Promise<T> {
        let mongooseModel: Document;
        if (obj instanceof Book) {
            mongooseModel = (<any>BookModel).fromBook(obj);
        }
        else if (obj instanceof Log) {

        }

        return new Promise<T>((resolve: Function, reject: Function) => {
            mongooseModel.save((err: any, dbObj) => {
                if (err) {
                    return reject(err);
                } else {
                    return resolve(dbObj);
                }
            });
        });
    }

    getAll(): Promise<any[]> {
        if (this.type === "books") {
            return new Promise<Book[]>((resolve: Function, reject: Function) => {
                BookModel.find((err: any, bookModels: Document[]) => {
                    if (err) {
                        return reject(err);
                    }

                    const books = bookModels.map((model: Document) => {
                        return (<any>BookModel).toBook(model);
                    });
                    return resolve(books);
                });
            });
        }

        return null;
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