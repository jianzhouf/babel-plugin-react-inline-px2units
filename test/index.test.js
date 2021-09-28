const pluginTester = require("babel-plugin-tester").default;
const myPlugin = require("../index.js");

pluginTester({
  pluginName: 'plugin-react-inline-px2units',
  plugin: myPlugin,
  babelOptions:{
    presets: ["@babel/preset-react"]
  },
  pluginOptions: {
    divisor: 100
  },
  tests: {
    /* your test objects */
    'jsx inline style px to rem': {
      code: `
        function App(){
          return <div style={{width: '20px', height: 20, padding: '20px 10px'}} title="123px"></div>
        }
      `,
      // expected output
      output: `
        function App() {
          return /*#__PURE__*/ React.createElement(\"div\", {
            style: {
              width: "0.20rem",
              height: 20,
              padding: "0.20rem 0.10rem",
            },
            title: "123px",
          });
        }
    `,
    }
  },
});
