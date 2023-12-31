const express = require('express');
const { databaseConnection } = require('./database');
const { PORT } = require('./config');
const expressApp = require('./express-app');
//const { CreateChannel } = require('./utils')

require('dotenv').config();


const StartServer = async() => {

    const app = express();
    
    await databaseConnection();

    //const channel = await CreateChannel()

    await expressApp(app);
    

    app.listen(process.env.PORT, () => {
          console.log(`listening to port ${process.env.PORT}`);
    })
    .on('error', (err) => {
        console.log(err);
        process.exit();
    })
    .on('close', () => {
        channel.close();
    })
    

}

StartServer();