import * as Lowdb from "lowdb";

import { IProvider } from "./base.provider";
import { IData } from "./../data/base.data";
import { DynamicLocalData } from "./../data/dynamic.local.data";

export class LocalStorageProvider implements IProvider {
    private db: any;

    constructor(db: any) {
        this.db = db;
    }

    provide<T>(type: string): IData<T> {
        return new DynamicLocalData<T>(this.db, type);
    }
}