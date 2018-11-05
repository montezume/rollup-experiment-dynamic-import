const constants = {
  ADD: "add",
  SUBTRACT: "subtract"
};

const getMath = () => {
  return new Promise((resolve, reject) => {
    import("./math/functions/math").then(
      success => {
        resolve(success);
      },
      error => reject(error)
    );
  });
};

export default {
  constants,
  getMath
};
