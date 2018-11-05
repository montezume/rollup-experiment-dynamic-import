const getQuotes = lang => {
  switch (lang) {
    case "en":
      return import("./en.js");
    case "fr":
      return import("./fr.js");
  }
};

const content = lang => {
  getQuotes(lang).then(success => success[0]);
};

var index = { content };

export default index;
//# sourceMappingURL=index.js.map
