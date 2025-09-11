const mongoose = require('mongoose');

function connectToDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('connected to db'))
    .catch(err => console.error('db connection error:', err));

}



module.exports = connectToDB;