module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // my additions
    plugins: ["nativewind/babel"],
  };
};
