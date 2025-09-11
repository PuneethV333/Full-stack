const mongoose = require('mongoose');

const connection = mongoose.connect("mongodb://127.0.0.1/men")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

module.exports = connection;