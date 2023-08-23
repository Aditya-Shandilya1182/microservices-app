const express = require('express');
const dotenv = require('dotenv');
//const { PORT } = require('./config');
const { databaseConnection } = require('./database');
const expressApp = require('./express-app');

const StartServer = async() => {

    dotenv.config();

    const app = express();
    
    await databaseConnection();
    
    await expressApp(app);

    app.listen(process.env.PORT, () => {
        console.log(`listening to port ${process.env.PORT}`);
    })
    .on('error', (err) => {
        console.log(err);
        process.exit();
    })

}

StartServer();