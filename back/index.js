let mongoose = require("mongoose");
let express = require("express");
let app = express();
mongoose
  .connect("mongodb://localhost/web", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log(`connected successfully`))
  .catch(error => console.log(`something went to wrong ${error.message}`));
