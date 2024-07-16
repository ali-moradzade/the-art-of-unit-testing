import {INetworkAdapter, NetworkAdapterFetchResults} from "./INetworkAdapter";

export interface WebsiteAliveResult {
    success: boolean;
    status: string;
}

export class WebsiteVerifier {
    constructor(
        private network: INetworkAdapter
    ) {
    }

    async isWebsiteAlive(): Promise<WebsiteAliveResult> {
        let netResult: NetworkAdapterFetchResults;

        try {
            netResult = await this.network.fetchUrlText("https://www.example.com/");

            if (!netResult.ok) {
                throw new Error(netResult.text);
            }

            const text = netResult.text;
            return this.processNetSuccess(text);
        } catch (err) {
            throw this.processNetFail(err);
        }
    }

    processNetSuccess(text: string): WebsiteAliveResult {
        const included = text.includes("illustrative");
        if (included) {
            return {success: true, status: "ok"};
        }
        return {success: false, status: "missing text"};
    }

    processNetFail(err: any): WebsiteAliveResult {
        return {success: false, status: err.message};
    }
}
