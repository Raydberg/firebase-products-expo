const { getDefaultConfig } = require('@expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const defaultConfig = getDefaultConfig(__dirname);
const nativewindConfig = withNativeWind(defaultConfig, { input: './global.css' });

defaultConfig.resolver.sourceExts.push('cjs');

module.exports = nativewindConfig;