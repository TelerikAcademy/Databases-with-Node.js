import { Observable, Observer } from "rx";

export class Waiter {
    public static wait(time: number): Observable<any> {
        return Observable.create((o: Observer<any>) => {
            setTimeout(() => {
                o.onNext(null);
                o.onCompleted();
            }, time);
        });
    }
}