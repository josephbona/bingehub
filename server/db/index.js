'use strict';
var db = require('./_db');
module.exports = db;

// eslint-disable-next-line no-unused-vars
var User = require('./models/user');
var List = require('./models/list');

// if we had more models, we could associate them in this file
List.belongsTo(User);
User.hasOne(List);
