import * as Lowdb from "lowdb";
import { Db, MongoClient } from "mongodb";
import * as mongoose from "mongoose";
import * as underscoreDb from "underscore-db";

import { IProvider } from "./../providers/base.provider";
import { MongooseDataProvider } from "./../providers/data.mongoose.provider";
import { LocalStorageProvider } from "./../providers/local.data.provider";
import { MongoDbDataProvider } from "./../providers/mongodb.data.provider";

import { connectionString, lowDbPath } from "./constants.config";

(<any>mongoose).Promise = Promise;

export class DbConfig {
    static initMongoose(): Promise<IProvider> {
        mongoose.connect(connectionString);
        const provider: IProvider =
            new MongooseDataProvider(mongoose);

        return Promise.resolve<IProvider>(provider);
    }

    static initMongoDb(): Promise<IProvider> {
        return MongoClient.connect(connectionString)
            .then((db: Db) => {
                const provider: IProvider
                    = new MongoDbDataProvider(db);
                return provider;
            });
    }

    static initLocalDb(): Promise<IProvider> {
        return new Promise<IProvider>((resolve: Function) => {
            const db = new Lowdb(lowDbPath);
            db.defaults({ books: [] })
                .value();

            db.mixin(underscoreDb);
            const provider: IProvider =
                new LocalStorageProvider(db);
            resolve(provider);
        });
    }
}
