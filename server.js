const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const seeders = require('./seeders/seed');
const PORT = 8080;
const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true
});
// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
