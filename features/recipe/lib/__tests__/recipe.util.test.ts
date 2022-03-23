import { getRecipe } from "../recipe.util";
import noRecipeTestCases from "../mocks/noRecipe";
import unparsableJsonLdTestCases from "../mocks/unparsableJsonLd";
import validJsonLdTestCases from "../mocks/validJsonLd";

describe("recipe util - getRecipe", () => {
  it("returns an error result when the site is not found", async () => {
    fetchMock.mockResolvedValueOnce({
      ok: false,
      status: 404,
    } as Response);

    const result = await getRecipe("https://sitethatdoesntexist.com");

    expect(result).toMatchObject({
      ok: false,
      err: true,
      val: "ERR_CANT_GET_SITE",
    });
  });

  noRecipeTestCases.forEach((i) =>
    it(`returns an error result when the site contains but does not provide a recipe as ${i.name}`, async () => {
      fetchMock.mockResolvedValueOnce({
        ok: true,
        status: 200,
        text: async () => i.response,
      } as Response);

      const result = await getRecipe(
        "https://SiteWithStructuredDataButNoRecipe.com"
      );

      expect(result).toMatchObject({
        ok: false,
        err: true,
        val: "ERR_CANT_GET_RECIPE",
      });
    })
  );

  describe("JSON-LD", () => {
    unparsableJsonLdTestCases.forEach((i) => {
      it(`returns an error result when a recipe node exists but can't be parsed: ${i.name}`, async () => {
        fetchMock.mockResolvedValueOnce({
          ok: true,
          status: 200,
          text: async () =>
            `<html><head><script type="application/ld+json">${JSON.stringify(
              i.jsonLd
            )}</script></head><body></body></html>`,
        } as Response);

        const result = await getRecipe("https://SiteWithJsonLdButNoRecipe.com");

        expect(result).toMatchObject({
          ok: false,
          err: true,
          val: "ERR_CANT_GET_RECIPE",
        });
      });
    });

    validJsonLdTestCases.forEach((i) =>
      it(`gets recipe result from JSON-LD: ${i.name}`, async () => {
        fetchMock.mockResolvedValueOnce({
          ok: true,
          status: 200,
          text: async () =>
            `<html><head><script type="application/ld+json">${JSON.stringify(
              i.responseJson
            )}</script></head><body></body></html>`,
        } as Response);

        const result = await getRecipe(i.url);

        expect(result).toEqual({
          ok: true,
          err: false,
          val: i.expected,
        });
      })
    );
  });
});
