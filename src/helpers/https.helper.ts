import * as cheerio from "cheerio";
import * as https from "https";

export async function get(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            const { statusCode } = res;
            const contentType: string = res.headers["content-type"] || "";

            let error;
            if (statusCode !== 200) {
              error = new Error("Request Failed.\n" +
                                `Status Code: ${statusCode}`);
            } else if (contentType === undefined || contentType === null) {
              error = new Error("Invalid content-type.\n" +
                                `Expected application/json but received ${contentType}`);
            }
            if (error) {
              res.resume();
              reject(error);
            }

            res.setEncoding("utf8");
            let rawData = "";
            res.on("data", (chunk) => { rawData += chunk; });
            res.on("end", () => {
              try {
                const $ = cheerio.load(rawData);
                resolve($);
              } catch (e) {
                reject(e);
              }
            });
          }).on("error", () => {
            reject(`Can not connect to ${url} please verify your internet connection.`);
        });
    });
}
