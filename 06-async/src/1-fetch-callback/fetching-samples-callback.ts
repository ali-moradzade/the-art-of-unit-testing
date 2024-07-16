import axios, {AxiosResponse} from 'axios';

export interface CallbackArg {
    success: boolean;
    status: string;
}

//Entry Point
export function isWebsiteAlive(callback: (result: CallbackArg) => void) {
    axios.get("https://example.com")
        .then(throwOnInvalidResponse)
        .then((res) => res.data)
        .then((text) => {
            processFetchSuccess(text, callback);
        })
        .catch((err) => {
            processFetchError(err, callback);
        });
}

export function throwOnInvalidResponse(res: AxiosResponse) {
    if (res.status !== 200) {
        throw Error(res.statusText);
    }
    return res;
}

//Entry Point
export function processFetchSuccess(text: string, callback: (result: CallbackArg) => void) {
    if (text.includes("illustrative")) {
        callback({success: true, status: "ok"});
    } else {
        callback({success: false, status: "missing text"});
    }
}

//Entry Point
export function processFetchError(err: Error, callback: (result: CallbackArg) => void) {
    callback({success: false, status: err.message});
}
