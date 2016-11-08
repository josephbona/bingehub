'use strict';
var crypto = require('crypto');
var _ = require('lodash');
var Sequelize = require('sequelize');

var db = require('../_db');

module.exports = db.define('list', {
    movies: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
    },
    shows: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
    }
});

