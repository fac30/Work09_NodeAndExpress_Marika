const express = require("express");

const server = express();

const staticHandler = express.static("public");
const bodyParser = express.urlencoded();

server.use(staticHandler);


server.get("/", (request, response, next) => {
    console.log(request.method + " " + request.url);
    next();
  });
  
  server.get("/", (request, response) => {
    response.send("<h1>Hello</h1>");
  });



server.post("/submit", bodyParser, (request, response) => {
  console.log(request.body);
  response.send("thanks for submitting");
});

const PORT = 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));