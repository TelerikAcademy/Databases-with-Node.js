export abstract class BaseModel {
    public id: string;

    public get _id(): string {
        return this.id;
    }

    public set _id(id: string) {
        this.id = id;
    }
};
