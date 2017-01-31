import { Waiter } from "./utils/waiter";

console.log("Now 1");


Waiter.wait(1000)
    .then(() => {
        console.log("Waited 1s");
        return Waiter.wait(1000);
    }).then(() => {
        console.log("Waited 1s more...");
    });

console.log("Now 2");
