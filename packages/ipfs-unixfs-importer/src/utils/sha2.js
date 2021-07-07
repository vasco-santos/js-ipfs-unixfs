const crypto = require('crypto')

const sha256 = {
  name: 'sha2-256',
  code: 0x12,
  encode: (/** @type {Uint8Array} */ input) => coerce(crypto.createHash('sha256').update(input).digest())
}

module.exports = {
  sha256
}

/**
 * @param {ArrayBufferView|ArrayBuffer|Uint8Array} o
 * @returns {Uint8Array}
 */
const coerce = o => {
  if (o instanceof Uint8Array && o.constructor.name === 'Uint8Array') return o
  if (o instanceof ArrayBuffer) return new Uint8Array(o)
  if (ArrayBuffer.isView(o)) {
    return new Uint8Array(o.buffer, o.byteOffset, o.byteLength)
  }
  throw new Error('Unknown type, must be binary type')
}
