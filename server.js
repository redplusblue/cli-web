const express = require("express");
const app = express();
const path = require("path");

// Serve static files (for browser users)
app.use(express.static(__dirname));

// Middleware to check User-Agent
app.get("/", (req, res) => {
    const userAgent = req.headers["user-agent"] || "";
    if (/curl|wget|httpie|fetch|http-client/i.test(userAgent)) {
        res.send("Hi, I'm Samir\n");
    } else {
        res.sendFile(path.join(__dirname, "index.html"));
    }
});

// Start server
const PORT = 8880;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
