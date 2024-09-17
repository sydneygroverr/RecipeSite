let express = require("express");

let app = express();

app.get("/", (req, res) => res.send("This is the server response to the client request."));

app.listen(3000, () => console.log("The server is listening for a client."));
