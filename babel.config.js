module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // 'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: [
            { '@components': './src/components' },
            { '@constants': './src/constants' },
            { '@helpers': './src/helpers' },
            { '@hooks': './src/hooks' },
            { '@navigation': './src/navigation' },
            { '@screens': './src/screens' },
            { '@services': './src/services' },
            { '@utils': './src/utils' },
          ],
          // extensions: [".js", ".jsx", ".ts", ".tsx"]
        },
      ],
    ],
  };
};
