const express = require("express");
const app = express();
const http = require("http");
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello your server is successfully running");
});

app.listen(port, () => {
  console.log(`server is running`);
});
