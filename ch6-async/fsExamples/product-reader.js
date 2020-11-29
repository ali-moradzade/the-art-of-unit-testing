const fs = require("fs");
const path = require("path");

const getAllProductsCallback = (errCallback, callback) => {
  const filePath = path.join(__dirname, "data/products.json");
  fs.readFile(filePath, (err, data) => {
    if (err) {
      errCallback(err);
    } else {
      callback(JSON.parse(data.toString()));
    }
  });
};

const getAllProductsWithPromise = async () => {
  const filePath = path.join(__dirname, "data/products.json");
  const result = await fs.promises.readFile(filePath);
  return JSON.parse(result.toString());
};

module.exports = {
  getAllProductsCallback,
  getAllProductsWithPromise,
};
