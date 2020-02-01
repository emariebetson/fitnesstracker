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
app.use(express.static("./public"));
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true
});
// routes
app.use(APIroutes);
app.use(HTMLroutes);
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
