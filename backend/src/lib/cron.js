import https from 'node:https';

const job = new CronoJob("*/14 * * * *", function(){
    const base = process.env.FRONTEND_URL
    if(!base) return;
    const url = new URL("/health", base).href;
    const client = url.startsWith("https") ? https : http;
    client
        .get(url, (res) => {
            if(res.statusCode===200) console.log("GET request sent succesfully");
            else console.log("GET request failed with status code", res.statusCode);
        })
        .on("error", (e) => console.error("Error sending GET request", e));
});

export default job;