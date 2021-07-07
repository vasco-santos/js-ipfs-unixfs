/* global crypto */

/**
 * @param {AlgorithmIdentifier} name
 */
const sha = name =>
  /**
   * @param {Uint8Array} data
   */
  async data => new Uint8Array(await crypto.subtle.digest(name, data))

module.exports = {
  sha256: {
    name: 'sha2-256',
    code: 0x12,
    encode: sha('SHA-256')
  }
}
