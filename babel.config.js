module.exports = {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
        [
            "module-resolver",
            {
                root: ["./src/"],
                alias: {
                    components: "./src/app/components",
                    contexts: "./src/contexts",
                    hooks: "./src/hooks",
                    types: "./src/types",
                },
            },
        ],
    ],
}
