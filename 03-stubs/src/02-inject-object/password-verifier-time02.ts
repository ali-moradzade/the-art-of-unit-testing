export const SUNDAY = 0;
export const MONDAY = 1;
export const SATURDAY = 6;

export class PasswordVerifier {
    constructor(
        private rules: [(input: string) => { passed: boolean, reason: string }],
        private timeProvider: {getDay: () => number},
    ) {
    }

    verify(input?: string) {
        if ([SATURDAY, SUNDAY].includes(this.timeProvider.getDay())) {
            throw new Error("It's the weekend!");
        }
        const errors: string[] = [];
        // more code goes here ...
        return errors;
    }
}
