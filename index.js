const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./src/startup/db');
const handleError = require('./src/middleware/errorHandle.middleware');
require('express-async-errors');

app.use(cors({
    origin: '*'
}));

require('./src/startup/routes')(app);

(async () => {
    const database = require('./src/startup/db');
    const User = require('./src/models/User');
    const Car = require('./src/models/Car');
    const Car_User = require('./src/models/CarUser');
    
    try {
        await database.sync();
        await sequelize.authenticate();
    } catch (error) {
        console.log(error);
    }
})();

app.use(handleError)

const port = 8080;

app.listen(port, () => console.log(`Server listening on port ${port}`));