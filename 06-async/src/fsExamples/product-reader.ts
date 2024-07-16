import fs from 'fs';
import path from 'path';

export function getAllProductsCallback(errCallback: any, callback: any) {
    const filePath = path.resolve(__dirname, "products.json");
    fs.readFile(filePath, (err, data) => {
        if (err) {
            errCallback(err);
        } else {
            callback(JSON.parse(data.toString()));
        }
    });
}

export async function getAllProductsWithPromise() {
    const filePath = path.join(__dirname, "products.json");
    const result = await fs.promises.readFile(filePath);
    return JSON.parse(result.toString());
}
