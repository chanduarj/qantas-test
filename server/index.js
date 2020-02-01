let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, "../src")));

app.post("/data", (req, res) => {
  const { message, id } = req.body;
  if (message && id) {
    res.status(200);
    res.json({
      message: "Success"
    });
  } else {
    res.status(400);
    res.json({
      message: "Oops. Missing data"
    });
  }
});

app.listen(1234, () => {
  console.log("Your server is running on http://localhost:1234");
});
