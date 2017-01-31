import { DynamicMongooseDbData } from './../data/dynamic.mongoose.data';
import { Mongoose } from 'mongoose';

import { IData } from "../data/base.data";
import { IProvider } from "./base.provider";

export class MongooseDataProvider implements IProvider {
    private mongoose: Mongoose;

    constructor(mongoose: Mongoose) {
        this.mongoose = mongoose;
    }

    public provide<T>(type: string): IData<T> {
        const data: IData<T> =
            new DynamicMongooseDbData<T>(this.mongoose, type);
        return data;
    }
}