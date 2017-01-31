import * as mongoose from 'mongoose';
export class ModelBuilder {
    public build(name: string, properties: {}): mongoose.Model<mongoose.Document> {
        const schema = new mongoose.Schema(properties);
        mongoose.model(name, schema);
        return mongoose.model(name);
    }
}