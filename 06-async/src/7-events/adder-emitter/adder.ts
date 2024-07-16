import {EventEmitter} from 'events';

export class Adder extends EventEmitter {
    constructor() {
        super();
    }

    add(x: number, y: number) {
        const result = x + y;
        this.emit("added", result);
        return result;
    }
}
