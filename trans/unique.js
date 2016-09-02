"use strict"
const StateT = require('akh.state').StateT

const plusOne = x => x + 1

/**
 * Unique transformer.
 * Computation with support for getting an unique value.
 */
const UniqueT = m => {
    var Instance = StateT(m)

    Instance.unique = Instance.prototype.unique = Instance.modify(plusOne)

    return Instance
}

/**
 * Run an unique computation.
 * 
 * @param m Unique computation.
 * @param [seed] Initial value.
 */
UniqueT.run = (m, seed) =>
     StateT.eval(
         m,
         isNaN(seed) ? 1 : seed);


module.exports = UniqueT