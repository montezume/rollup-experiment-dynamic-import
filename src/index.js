const getQuotes = lang => {
  switch (lang) {
    case "en":
      return import("./quotes/en");
    case "fr":
      return import("./quotes/french/fr");
  }
};

const content = lang => {
  getQuotes(lang).then(success => success[0]);
};

export default { content };
