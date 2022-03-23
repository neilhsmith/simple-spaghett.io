import { Result, Ok, Err } from "ts-results";
import { Cheerio, Element, load } from "cheerio";
import type { Recipe } from "../";
import {
  flatten as flattenJsonLd,
  isRecipeNode as isRecipeJsonLd,
  map as mapJsonLd,
} from "./formats/jsonld";

export type GetRecipeError =
  | "ERR_CANT_GET_SITE"
  | "ERR_CANT_GET_RECIPE"
  | "ERR_UNEXPECTED";

export const getRecipe = async (
  url: string
): Promise<Result<Recipe, GetRecipeError>> => {
  const response = await fetch(url);
  if (!response.ok) {
    return Err("ERR_CANT_GET_SITE");
  }

  const html = await response.text();
  const $ = load(html);

  let recipe: Recipe | null | undefined;

  const jsonLdEles = $("script[type='application/ld+json']");
  if (jsonLdEles.length) {
    recipe = parseRecipeFromJsonLd(jsonLdEles);
  }

  if (!recipe || Object.keys(recipe).length === 0) {
    return Err("ERR_CANT_GET_RECIPE");
  }

  return Ok(recipe);
};

const parseRecipeFromJsonLd = (element: Cheerio<Element>): Recipe | null => {
  const content = element.html();
  if (!content) {
    return null;
  }

  const doc = JSON.parse(content);
  const nodes = flattenJsonLd(doc);
  const recipe = nodes.find(isRecipeJsonLd);

  return recipe ? mapJsonLd(recipe) : null;
};
