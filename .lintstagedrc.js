module.exports = {
  '**/*.+(js|ts|json)': ['prettier', 'jest --bail --findRelatedTests'],
  /**
   * @note --bail used to exit the test suite immediately upon a number (1) of failing test suite
   * @note -findRelatedTests to run the tests depending on our jest configuration
   */
}
