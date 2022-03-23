// TODO: add more test cases

/**
 * Recipe JSON-LD nodes which can't be parsed into a Recipe.
 */
const unparsableJsonLdTestCases = [
  {
    name: "Empty Recipe node",
    jsonLd: {
      "@context": "http://schema.org/",
      "@type": "Recipe",
    },
  },
];

export default unparsableJsonLdTestCases;
