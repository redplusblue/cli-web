const express = require("express");
const path = require("path");
const app = express();
const port = 8880;

app.use((req, res, next) => {
    console.log("\n=== Incoming Request ===");
    console.log(`Method: ${req.method}`);
    console.log(`URL: ${req.url}`);
    console.log(`User-Agent: ${req.headers["user-agent"] || "Unknown"}`);
    next();
});

app.get("/", (req, res) => {
    const userAgent = req.headers["user-agent"] || "";
    if (/curl|wget|httpie|fetch|http-client/i.test(userAgent)) {
        console.log("CLI detected: Sending plain text");
        res.setHeader("Content-Type", "text/plain");
	res.send(`Hi, I'm Samir. A little bit about me: \n
- Bachelor's degree in Computer Science \n
- Experience in Full Stack Web Development and Android App Development \n
- Currently learning Machine Learning and Data Science \n
- Linux Enthusiast \n
- Operate a robust home server for hosting, networking, and cloud storage \n
`)
    } else {
        console.log("Browser detected: Sending HTML");
        res.sendFile(path.join(__dirname, "index.html"));
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
