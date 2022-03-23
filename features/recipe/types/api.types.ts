import { Recipe } from "./recipe.types";

export type GetRecipeError =
  | "ERR_CANT_GET_SITE"
  | "ERR_CANT_GET_RECIPE"
  | "ERR_UNEXPECTED";

export type GetRecipeResponse = {
  ok: boolean;
  val: Recipe | GetRecipeError;
};
