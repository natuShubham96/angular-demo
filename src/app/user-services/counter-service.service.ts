export class CounterService {
    activeCounter = 0;
    inactiveCounter = 0;

    incrementActive() {
        this.activeCounter++;
        console.log("Active Counter ",this.activeCounter);
    }

    incrementInactive() {
        this.inactiveCounter++;
        console.log("Inactive Counter ",this.inactiveCounter);
    }
}