"use strict"

const UniqueT = require('./trans/unique');
const Unique = require('./type/unique');

module.exports = {
    UniqueT: UniqueT,
    Unique: Unique,

    trans: { unique: UniqueT },
    type: { unique: Unique }
};
