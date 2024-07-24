export interface IComplicatedLogger {
    info(text: string): void;

    debug(text: string, obj: any): void;

    warn(text: string): void;

    error(text: string, location: string, stacktrace: string): void;
}
