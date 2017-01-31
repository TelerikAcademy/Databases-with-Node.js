import { BaseModel } from "./base.model";

export class Author extends BaseModel {
    public firstname: string;
    public lastname: string;

    constructor(firstName: string, lastName: string) {
        super();
        this.firstname = firstName;
        this.lastname = lastName;
    }
}