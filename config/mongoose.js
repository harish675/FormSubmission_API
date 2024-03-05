
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://harishjadhav675:X2Y0dzucn2fMvNQB@testdb.zofglmh.mongodb.net/?retryWrites=true&w=majority&appName=testDB`);

const db = mongoose.connection;

db.on('error', console.error.bind(console,"Error connecting to mongoDB"));

db.once('open', function(){
    console.log('Connected to mongoDB');
});

module.exports = db;