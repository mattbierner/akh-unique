"use strict"
const UniqueT = require('../trans/unique')
const Identity = require('akh.identity').Identity

/**
 * Unique monad
 */
const Unique = UniqueT(Identity)

/**
 * Run an unique computation.
 * 
 * @param m Unique computation.
 * @param [seed] Initial unique value.
 */
Unique.run = (m, seed) => Identity.run(UniqueT.run(m, seed))

module.exports = Unique