// Requirements
const config = require('../../config');
// const bus = require('./../modules/bus');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const { host, port, database, user, password, secret } = config.db.mongoSession;

const url = `mongodb://${user}:${password}@${host}:${port}`;
console.log(`Mongo URL: ${url}`)
const mongoOptions = {
    url,
    dbName: database,
    ttl: 1 * 365 * 24 * 60 * 60
};

const sessions = session({
    secret: secret,
    cookie: { maxAge: 1 * 365 * 24 * 60 * 60 },
    store: new MongoStore(mongoOptions)
});


module.exports = sessions;