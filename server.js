const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const APIroutes = require('./routes/api');
const HTMLroutes = require('./routes/html');
const seeders = require('./seeders/seed');
const PORT = process.env.PORT || 3000;
const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
mongoose.connect(process.env.MONGODB_URI || 'mongodb://heroku_92wm1tjj:o27qkcou4vuhq260avhnjlv877@ds353358.mlab.com:53358/heroku_92wm1tjj', {
  useNewUrlParser: true
});
// routes
app.use(APIroutes);
app.use(HTMLroutes);
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
