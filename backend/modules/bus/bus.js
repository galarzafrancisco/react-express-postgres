/*
Global bus used to and listen to events across the application.
*/

const EventEmitter = require('events');
const bus = new EventEmitter();

module.exports = bus