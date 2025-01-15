/* eslint-disable no-undef */
// babel.config.js
module.exports = {
  presets: [
        [
            "@babel/preset-env",
            {
        targets: {
          browsers: [
                        "last 2 versions",
                        "ie >= 11"
                    ]
                },
        modules: false
            }
        ],
        [
            "@babel/preset-react",
            {
        runtime: "automatic" // Enables the new JSX transform
            }
        ]
    ]
};
