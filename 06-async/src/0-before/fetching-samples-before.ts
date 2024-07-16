import axios from 'axios';

export function isWebsiteAliveWithCallback(callback: any) {
    const website = "https://example.com/";
    axios.get(website)
        .then((response) => {
            if (response.status !== 200) {
                //how can we simulate this network issue?
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => response.data)
        .then((text) => {
            if (text.includes("illustrative")) {
                callback(null, {success: true, status: "ok"});
            } else {
                //how can we test this path?
                throw new Error("text missing");
            }
        })
        .catch((err) => {
            //how can we test this exit point?
            callback(err);
        });
}

export async function isWebsiteAliveWithPromises() {
    const resp = await axios.get("https://example.com");
    if (resp.status !== 200) {
        throw new Error(resp.statusText);
    }
    const text = resp.data;
    const included = text.includes("illustrative");

    if (included) {
        return {success: true, status: "ok"};
    }

    throw new Error("text missing");
}
