import axios, {AxiosError, AxiosResponse} from 'axios';

export async function isWebsiteAlive() {
    try {
        const res = await axios.get("https://www.example.com");
        throwIfResponseNotOK(res);

        const text = res.data;

        return processFetchContent(text);
    } catch (err) {
        processFetchError(err as AxiosError);
    }
}

export function throwIfResponseNotOK(res: AxiosResponse) {
    if (res.status !== 200) {
        throw res.statusText;
    }
}

//Entry Point
export function processFetchContent(text: string) {
    const included = text.includes("illustrative");

    if (included) {
        return {success: true, status: "ok"};
    }

    return {success: false, status: "missing text"};
}

//Entry Point
export function processFetchError(err: AxiosError) {
    throw err;
}
