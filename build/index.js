const { debuglog } = require('util');

const LOG = debuglog('@mnpjs/test-package-6')

/**
 * test-description
 * @param {Config} config Configuration object.
 * @param {string} config.type The type.
 */
               async function testPackage_6(config = {}) {
  const {
    type,
  } = config
  LOG('@mnpjs/test-package-6 called with %s', type)
  return type
}

/**
 * @typedef {Object} Config
 * @property {string} type The type.
 */

module.exports = testPackage_6
//# sourceMappingURL=index.js.map