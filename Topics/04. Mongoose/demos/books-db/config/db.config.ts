import * as mongoose from 'mongoose';

export class DbConfig {
    public static init(connectionString): Promise<mongoose.Mongoose> {
        (<any>mongoose).Promise = global.Promise;
        mongoose.connect(connectionString);
        return Promise.resolve<mongoose.Mongoose>(mongoose);
    }
}