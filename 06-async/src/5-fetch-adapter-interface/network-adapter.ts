import axios from 'axios';
import {INetworkAdapter, NetworkAdapterFetchResults} from "./INetworkAdapter";

export class NetworkAdapter implements INetworkAdapter {
    async fetchUrlText(url: string): Promise<NetworkAdapterFetchResults> {
        const res = await axios.get(url);
        if (res.status === 200) {
            return {ok: true, text: res.data};
        }

        return {ok: false, text: res.statusText};
    }
}
