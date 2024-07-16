import {NetworkAdapter} from "./network-adapter";

export class WebsiteVerifier {
    constructor(
        private network: NetworkAdapter,
    ) {
    }

    async isWebsiteAlive() {
        const result = await this.network.fetchUrlText("https://www.example.com/");

        if (result.ok) {
            const text = result.text;
            return this.onFetchSuccess(text);
        }

        return Promise.reject(this.onFetchError(result.text));
    }

    onFetchSuccess(text: string) {
        const included = text.includes("illustrative");

        if (included) {
            return {success: true, status: "ok"};
        }

        return {success: false, status: "missing text"};
    }

    onFetchError(err: string) {
        return {success: false, status: err};
    }
}
