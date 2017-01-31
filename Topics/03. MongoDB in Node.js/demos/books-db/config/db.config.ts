import { Db, MongoClient } from "mongodb";

export class DbConfig {
    public static init(connectionString: string): Promise<Db> {
        return MongoClient.connect(connectionString);
    }
}