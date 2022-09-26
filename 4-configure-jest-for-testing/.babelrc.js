const isProd = String(process.env.NODE_ENV) === 'production'
const isTest = String(process.env.NODE_ENV) === 'test'

// jest use babel configuration by default
module.exports = {
  presets: [
    ['@babel/preset-env', {modules: isTest ? 'commonjs' : false}],
    ["@babel/preset-react", {"runtime": "automatic"}]
  ],
}