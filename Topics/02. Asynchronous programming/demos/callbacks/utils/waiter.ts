export class Waiter {
    public static wait(time: number, cb: Function): void {
        setTimeout(cb, time);
    }
}