import { Waiter } from "./waiter";
import { Observer, Observable } from "rx";
const length = 100,
    maxNumber = 100;

const numbers = Array.from<number>({ length })
    .map((_, index) => index + 1);

const timeout = (index: number, o: Observer<number>) => {
    Waiter.wait(100)
        .subscribe(() => {
            o.onNext(numbers[index]);
            if (index === numbers.length - 1) {
                o.onCompleted();
            } else {
                timeout(index + 1, o);
            }
        });
};

export class NumbersGetter {
    public static getNumbers(): Observable<number> {
        return Observable.create<number>((o: Observer<number>) => {
            timeout(0, o);
        });
    }
}