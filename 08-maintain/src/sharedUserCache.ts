export interface IUserDetails {
    key: string;
    password: string;
}

export interface IUserCache {
    addUser(user: IUserDetails): void;

    getUser(key: string): IUserDetails | undefined;

    reset(): void;
}

export class UserCache implements IUserCache {
    users: any = {};

    addUser(user: IUserDetails): void {
        if (this.users[user.key]) {
            throw new Error("user already exists");
        }

        this.users[user.key] = user;
    }

    getUser(key: string) {
        return this.users[key];
    }

    reset(): void {
        this.users = {};
    }
}

let _cache: IUserCache;

// Singleton Pattern
export function getUserCache() {
    if (_cache === undefined) {
        _cache = new UserCache();
    }

    return _cache;
}
