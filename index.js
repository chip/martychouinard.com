var express = require("express");
var app = express();
var router = express.Router();

app.use(express.static('.'));

router.get("/", function(req,res) {
  res.sendFile(__dirname + "/index.html");
});

app.use("/",router);

app.listen(3000, function() {
  console.log("Live at Port 3000");
});
