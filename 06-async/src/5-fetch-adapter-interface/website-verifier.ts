import {INetworkAdapter, NetworkAdapterFetchResults} from "./INetworkAdapter";

export interface WebsiteAliveResult {
    success: boolean;
    status: string;
}

export async function isWebsiteAlive(network: INetworkAdapter): Promise<WebsiteAliveResult> {
    let netResult: NetworkAdapterFetchResults;

    try {
        netResult = await network.fetchUrlText("https://www.example.com/");

        if (!netResult.ok) {
            throw new Error(netResult.text);
        }

        const text = netResult.text;
        return processNetSuccess(text);
    } catch (err: any) {
        throw processNetFail(err);
    }
}

export function processNetSuccess(text: string): WebsiteAliveResult {
    const included = text.includes("illustrative");

    if (included) {
        return {success: true, status: "ok"};
    }

    return {success: false, status: "missing text"};
}

export function processNetFail(err: any): WebsiteAliveResult {
    return {success: false, status: err.message};
}
