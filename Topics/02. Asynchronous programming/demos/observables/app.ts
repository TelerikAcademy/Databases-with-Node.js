import { Waiter } from "./utils/waiter";
import { NumbersGetter } from "./utils/numbers";

console.log("Now 1");

Waiter.wait(1000)
    .do(() => console.log("Waited 1s"))
    .flatMap(() => Waiter.wait(1000))
    .do(() => console.log("Waited 1s more..."))
    .subscribe(() => console.log("...And... 1s more..."))

console.log("Now 2");

NumbersGetter.getNumbers()
    .subscribe((n: number) => console.log(n));