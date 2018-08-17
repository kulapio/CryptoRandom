// Need this line for CRYPTO: true
// No test on browser yet, but I beleive there's window.crypto and you can remove this line below
global.crypto = require('crypto')

const BigNumber = require('bignumber.js')
BigNumber.config({ CRYPTO: true })
const isCrypto  = BigNumber.config().CRYPTO       // true
const random    = BigNumber.random()              // 0.54340758610486147524

console.log(`isCrypto ${isCrypto}`)
console.log(`random ${random}`)
