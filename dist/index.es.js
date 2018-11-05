const constants = {
  ADD: "add",
  SUBTRACT: "subtract"
};

const getMath = () => {
  return new Promise((resolve, reject) => {
    Promise.resolve().then(function () { return math; }).then(
      success => {
        resolve(success);
      },
      error => reject(error)
    );
  });
};

var index = {
  constants,
  getMath
};

const sum = (a, b) => a + b;
const difference = (a, b) => a - b;
const multiply = (a, b) => a * b;

var math = /*#__PURE__*/Object.freeze({
  sum: sum,
  difference: difference,
  multiply: multiply
});

export default index;
//# sourceMappingURL=index.es.js.map
