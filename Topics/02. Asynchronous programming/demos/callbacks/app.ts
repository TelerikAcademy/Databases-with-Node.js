import { Waiter } from "./utils/waiter";

console.log("Now 1");

Waiter.wait(1000, () => {
    console.log("Waited 1s");
    Waiter.wait(1000, () => {
        console.log("Waited 1s more...");
    });
    console.log("Right after \"Waited 1s\"");
});

console.log("Now 2");
