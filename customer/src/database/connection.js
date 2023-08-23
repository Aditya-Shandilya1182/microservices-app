const mongoose = require('mongoose');
//const { DB_URL } = require('../config');
//const { DB_URL } = require('../config/index');

module.exports = async() => {
    try {
        await mongoose.connect(process.env.MONODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Db Connected');
        
    } catch (error) {
        console.error('Error ============ ON DB Connection')
        console.log(error);
    }
 
};

 