import axios from 'axios';

export class NetworkAdapter {
    async fetchUrlText(url: string) {
        const res = await axios.get(url);

        if (res.status === 200) {
            return {ok: true, text: res.data};
        }

        return {ok: false, text: res.statusText};
    }
}
