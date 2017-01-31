export class Waiter {
    public static wait(time: number, cb?: Function): Promise<any> {
        if (cb != null) {
            setTimeout(cb, time);
            return Promise.resolve<any>(null);
        }
        else {
            return new Promise<any>((resolve: Function) => {
                this.wait(time, resolve);
            });
        }
    }
}