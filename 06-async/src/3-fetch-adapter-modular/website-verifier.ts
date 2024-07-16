import {fetchUrlText} from "./network-adapter";

export async function isWebsiteAlive() {
    try {
        const result = await fetchUrlText("https://www.example.com/");

        if (!result.ok) {
            throw new Error(result.text)
        }

        const text = result.text;
        return processFetchSuccess(text);
    } catch (err: any) {
        processFetchFail(err);
    }
}

export function processFetchSuccess(text: string) {
    const included = text.includes("illustrative");

    if (included) {
        return {success: true, status: "ok"};
    }

    return {success: false, status: "missing text"};
}

export function processFetchFail(err: Error) {
    return {success: false, status: err.message};
}
