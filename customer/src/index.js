const express = require('express');
const { databaseConnection } = require('./database');
const { PORT } = require('./config');
const expressApp = require('./express-app');
//const { CreateChannel } = require('./utils')

const StartServer = async() => {

    const app = express();
    
    await databaseConnection();

    //const channel = await CreateChannel()

    await expressApp(app);
    

    app.listen(8001, () => {
          console.log(`listening to port ${PORT}`);
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