import * as Lowdb from "lowdb";

import { IData } from "./base.data";

export class DynamicLocalData<T> implements IData<T>{
    private db: any;
    private type: string;

    constructor(db: any, type: string) {
        this.db = db;
        this.type = type;
    }

    add(obj: T): Promise<T> {
        return new Promise<T>((resolve: Function) => {
            let result = this.db.get(this.type)
                .push(obj)
                .value();
            return Promise.resolve<T>(result);
        });
    }

    getAll(): Promise<T[]> {
        return new Promise<T[]>((resolve: Function) => {
            return resolve(this.db.get(this.type)
                .value());
        });
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