import { BaseModel } from "./base.model";
export class Log extends BaseModel {
    public message: string;
    public date: Date;

    constructor(message: string, date: Date) {
        super();
        this.message = message;
        this.date = date;
    }
}
