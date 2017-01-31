import { ModelBase } from "./base.model";
export class Author extends ModelBase {
    public name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }
}