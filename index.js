const utils = require("@babel/helper-plugin-utils") ;
const assign = require("object-assign");

module.exports = utils.declare((api, options) => {
  let enable = false;

  let opts = assign({
    divisor: 1,
    multiple: 1,
    decimalPlaces: 2,
    targetUnits: "rem",
    comment: "no",
  }, options);

  function repalcePx(str) {
    if (!str) {
      return "";
    }
    return str.replace(/\b(\d+(\.\d+)?)px\b/gi, function (match, x) {
      var size = (x * opts.multiple) / opts.divisor;
      return size % 1 === 0
        ? size + opts.targetUnits
        : size.toFixed(opts.decimalPlaces) + opts.targetUnits;
    });
  }

  return {
    name: "babel-plugin-react-inline-px2units",
    visitor: {
      JSXAttribute: {
        enter(path) {
          if (path.node.name.name === "style") {
            enable = true;
          }
        },
        exit(path) {
          if (path.node.name.name === "style") {
            enable = false;
          }
        },
      },
      Property: {
        enter(path) {
          if (enable && typeof path.node.value.value === "string") {
            path.node.value.value = repalcePx(path.node.value.value);
          }
        },
      },
    },
  };
});
