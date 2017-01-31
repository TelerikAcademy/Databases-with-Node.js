import { IData } from "./data/base.data";
import { LogsDbData } from "./data/logs.data";
import { LogsLocalData } from "./data/logs.local.data";
import { Log } from "./models/log.model";

export class Logger {
    private data: IData<Log>;

    constructor(data: IData<Log>) {
        this.data = data;
    }

    public log(msg: string) {
        const log = new Log(msg, new Date());
        this.data.add(log);
    }

    public printLogs() {
        this.data.getAll()
            .then((logs: Log[]) => {
                logs.forEach((log: Log) => console.log(log));
            });
    }
}
