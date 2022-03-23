// TODO: add cases for Microdata and RDFa

/**
 * Test cases when a site contains structured data but not for a recipe.
 */
const noRecipeTestCases = [
  {
    name: "JSON-LD",
    response: `<html><head><script type="application/ld+json">{ "@context": "https://schema.org/Person", "name": "John Doe" }</script></head><body></body></html>`,
  },
];

export default noRecipeTestCases;
