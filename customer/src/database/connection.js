const mongoose = require('mongoose');
//const { DB_URL } = require('../config');
//const { DB_URL } = require('../config/index');

module.exports = async() => {
    const DB_URL = "mongodb+srv://adityashandilya1812:1wAqKMYB1ldtWxwO@cluster0.kblvivv.mongodb.net/?retryWrites=true&w=majority"
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Db Connected');
        
    } catch (error) {
        console.error('Error ============ ON DB Connection')
        console.log(error);
    }
 
};

 