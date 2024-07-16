import {interval, Observable} from 'rxjs'
import {map} from 'rxjs/operators';

export function calculate1(x: number, y: number, resultCallback: (n: number) => void) {
    setTimeout(() => {
            resultCallback(x + y);
        },
        5000);
}

export function calculate2(x: number, y: number) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(x + y),
            4000);
    });
}

export function calculate4(getInputsFn: () => { x: number, y: number }, resultFn: (n: number) => void) {
    setInterval(() => {
        const {x, y} = getInputsFn();
        resultFn(x + y);
    }, 1000);
}

export function calculate5(getInputsFn: () => { x: number, y: number }) {
    return interval(10000)
        .pipe(
            map(() => {
                const {x, y} = getInputsFn();
                return x + y;
            })
        );
}

export async function calculate6(observable: Observable<number>) {
    let sum = 0;
    observable.subscribe(val => sum += val);
    return sum;
}
