
const mongoose = require('mongoose');

// harishjadhav675
// nz0LXApMyqgIgDtu

mongoose.connect(`mongodb+srv://harishjadhav675:nz0LXApMyqgIgDtu@cluster0.nzktl5t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);

const db = mongoose.connection;

db.on('error', console.error.bind(console,"Error connecting to mongoDB"));

db.once('open', function(){
    console.log('Connected to mongoDB');
});

module.exports = db;