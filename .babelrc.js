module.exports = api => {
  // avoid re-executing the config function every time a file is compiled,
  // because then it would also need to re-execute any plugin and preset
  // functions referenced in that config
  api.cache(true)

  const presets = [
    require('@babel/preset-env'),
    [require('@babel/preset-typescript'), { isTSX: true, allExtensions: true }],
  ]

  const plugins = [
    // enables the re-use of Babel's injected helper code to save on codesize
    require.resolve('@babel/plugin-transform-runtime'),

    // introduces ? token in an argument list which allows for partially applying an argument list to a call expression
    require.resolve('@babel/plugin-proposal-partial-application'),

    // add numeric literal separators
    require.resolve('@babel/plugin-proposal-numeric-separator'),

    // add the async/await on top level
    require.resolve('@babel/plugin-syntax-top-level-await'),
  ]

  return {
    presets,
    plugins,
  }
}
