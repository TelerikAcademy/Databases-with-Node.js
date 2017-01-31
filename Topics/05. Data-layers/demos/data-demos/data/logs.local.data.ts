import { IData } from "./base.data";
import { Log } from "./../models/log.model";

export class LogsLocalData implements IData<Log> {
    private logs: Log[] = [];

    public add(obj: Log): Promise<Log> {
        return new Promise<Log>((resolve: Function) => {
            this.logs.push(obj);
            return obj;
        });
    }

    public getAll(): Promise<Log[]> {
        return Promise.resolve<Log[]>(this.logs);
    }
}
