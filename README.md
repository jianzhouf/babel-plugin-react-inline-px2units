# babel-plugin-react-inline-px2units
react inline style:  pixel units rem units


## Install

```
npm install babel-plugin-react-inline-px2units --save-dev
# or 
yarn add -D babel-plugin-react-inline-px2units
```

## Usage

The plugin is only used for JSX syntax, it works with [preset-react](https://babeljs.io/docs/en/babel-preset-react)

```json
{
  presets: ["@babel/preset-react"],
  plugins: ["react-inline-px2units"]
}
```

With the default settings
```js
/* input */
function App(){
  return <div style={{width: '20px'}}></div>
}
/* output */
function App() {
  return /*#__PURE__*/ React.createElement(\"div\", {
    style: {
      width: "20rem",
    },
  });
}
```

## Options
| Option        | type   | default | desc                                                  |
| ------------- | ------ | ------- | ----------------------------------------------------- |
| divisor       | number | 1       | replace pixel value with pixel / divisor              |
| multiple      | number | 1       | replace pixel value with pixel * multiple             |
| decimalPlaces | number | 2       | replace pixel value with pixel.toFixed(decimalPlaces) |
| targetUnits   | string | rem     | replace pixel units                                   |


## Tips
if you want to tranform pixel value in css, please use [@remax/postcss-px2units](https://www.npmjs.com/package/@remax/postcss-px2units)