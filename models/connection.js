//This code is required in order to connect with the backend//

const pgp = require('pg-promise')({
    query: e => {
        console.log(`QUERY: ${e.query}`);
    }
});

const options = {
    host: 'localhost',
    database: 'to-do-app'
};

const db = pgp(options);
module.exports = db;






