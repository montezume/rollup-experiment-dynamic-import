const constants = {
  ADD: "add",
  SUBTRACT: "subtract"
};

const getMath = () => {
  return new Promise((resolve, reject) => {
    import("./math.js").then(
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

export default index;
//# sourceMappingURL=index.js.map
