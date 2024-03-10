const mongoose = require('mongoose');

module.exports = function () {
  mongoose
    .connect(
      'mongodb+srv://2200030024cseh:tarun@123@lib.akf28ol.mongodb.net/?retryWrites=true&w=majority&appName=lib',
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log(' Connected to Db '))
    .catch((err) => console.log('not connected to Db', err));
};
