import type {
  Recipe,
  InstructionSection,
  Instruction,
  Nutrition,
} from "../../";
import { parseISO8601Duration } from "@common/util/duration";

type Node = Record<string, unknown>;

/**
 * Recursively flattens the given node into a single array on '@graph' properties.
 *
 * @param node The object or array which might contain '@graph' children.
 */
export const flatten = (node: any): Node[] => {
  let result: Node[] = [];

  if (Array.isArray(node)) {
    node.forEach((n) => {
      result = [...result, ...flatten(n)];
    });
  } else {
    if (Object.prototype.hasOwnProperty.call(node, "@graph")) {
      // TODO: should i add the node to result? it's the object containing the
      // graph array. can it ever be the recipe node and a graph node at the same time?
      result = [node, ...flatten(node["@graph"])];
    } else {
      result.push(node);
    }
  }

  return result;
};

/**
 * A node is a recipe if it has at least a name, ingredients and instructions
 *
 * @param node The node to check.
 */
export const isRecipeNode = (node: Node): boolean => {
  if (!Object.prototype.hasOwnProperty.call(node, "@type")) {
    return false;
  }

  const possibleRecipe = Array.isArray(node["@type"])
    ? node["@type"].includes("Recipe")
    : node["@type"] === "Recipe";

  return (
    possibleRecipe &&
    Object.prototype.hasOwnProperty.call(node, "name") &&
    Object.prototype.hasOwnProperty.call(node, "recipeIngredient") &&
    Object.prototype.hasOwnProperty.call(node, "recipeInstructions")
  );
};

export const map = (node: Node): Recipe | null => {
  if (!isRecipeNode(node)) {
    return null;
  }

  // we have to handle lots of different formats for most of the recipe's props
  // so we'll just create functions for each prop that isn't a simple parse
  return {
    name: node["name"],
    ingredients: node["recipeIngredient"],
    instructionSections: mapInstructionSections(node["recipeInstructions"]),
    categories: mapCategories(node["recipeCategory"]),
    cookTime: mapTime(node["cookTime"]),
    cuisine: mapCuisine(node["recipeCuisine"]),
    description: node["description"],
    keywords: mapKeywords(node["keywords"]),
    nutrition: mapNutrition(node["nutrition"]),
    prepTime: mapTime(node["prepTime"]),
    recipeYield: mapYield(node["recipeYield"]),
    totalTime: mapTime(node["totalTime"]),
    url: mapUrl(node),
  } as Recipe;
};

const mapInstructionSections = (node: any): InstructionSection[] => {
  const result: InstructionSection[] = [];

  if (Array.isArray(node)) {
    if (node.every((n) => n["@type"] === "HowToStep")) {
      result.push({
        instructions: node.map(mapInstruction),
      });
    } else {
      node.forEach((n) => {
        if (n["@type"] === "HowToSection") {
          result.push({
            ...(n["name"] && { name: n["name"] }),
            instructions: n["itemListElement"].map(mapInstruction),
          });
        }
      });
    }
  } else {
    if (typeof node === "string") {
      result.push({
        instructions: [
          {
            text: node,
          },
        ],
      });
    } else if (node["@type"] === "HowToStep") {
      result.push({
        instructions: node.map(mapInstruction),
      });
    } else if (node["@type"] === "HowToSection") {
      result.push({
        ...(node["name"] && { name: node["name"] }),
        instructions: node["itemListElement"].map(mapInstruction),
      });
    }
  }

  return result;
};

const mapInstruction = (node: any): Instruction => {
  if (typeof node === "string") {
    return {
      text: node,
    };
  }

  return {
    ...(node["name"] && { name: node["name "] }),
    text: node["text"],
  };
};

const mapCategories = (node?: any): string[] | undefined => {
  if (!node) {
    return undefined;
  }

  return Array.isArray(node) ? node : [node];
};

const mapKeywords = (node?: any): string[] | undefined => {
  // convert comma separate strings to array

  if (!node) {
    return undefined;
  }

  return node.split(",").map((n: string) => n.trim());
};

const mapCuisine = (node?: any): string[] | undefined => {
  // json-ld can provide the cuisine as a string or array, convert string to array

  if (!node) {
    return undefined;
  }

  if (Array.isArray(node)) {
    return node.length === 0 ? undefined : node;
  }

  return Array.isArray(node) ? node : [node];
};

const mapNutrition = (node?: any): Nutrition | undefined => {
  // a nonexistant item on node returns null. we'd prefer undefined
  // so return the nutrition node as a Nutrition object but flip nulls to undefined

  if (!node) {
    return undefined;
  }

  return {
    calories: node["calories"] || undefined,
    carbohydrateContent: node["carbohydrateContent"] || undefined,
    cholesterolContent: node["cholesterolContent"] || undefined,
    fatContent: node["fatContent"] || undefined,
    fiberContent: node["fiberContent"] || undefined,
    proteinContent: node["proteinContent"] || undefined,
    saturatedFatContent: node["saturatedFatContent"] || undefined,
    servingSize: node["servingSize"] || undefined,
    sodiumContent: node["sodiumContent"] || undefined,
    sugarContent: node["sugarContent"] || undefined,
    transFatContent: node["transFatContent"] || undefined,
    unsaturatedFatContent: node["unsaturatedFatContent"] || undefined,
  } as Nutrition;
};

const mapTime = (time?: any): string | undefined => {
  // json-ld durations come in ISO8601 format and we want to keep that format.
  // however, we want to set undefined if we get an invalid duration like PT0S

  if (!time) {
    return undefined;
  }

  const duration = parseISO8601Duration(time);

  return duration ? time : undefined;
};

const mapUrl = (node?: Node): string | undefined => {
  // find & return the url from a variety of possible props

  if (!node) {
    return undefined;
  }

  if (Object.prototype.hasOwnProperty.call(node, "url")) {
    return node["url"] as string;
  }
  if (Object.prototype.hasOwnProperty.call(node, "mainEntityOfPage")) {
    if (typeof node["mainEntityOfPage"] === "string") {
      return node["mainEntityOfPage"];
    }
    // doing this instead of just returning node["mainEntityOfPage"]["@id"]
    // is only to make typescipt shut up that node["mainEntityOfPage"] is of type unknown
    const mainEntity = node["mainEntityOfPage"] as { "@id": string };
    return mainEntity["@id"];
  }
  if (Object.prototype.hasOwnProperty.call(node, "@id")) {
    return node["@id"] as string;
  }

  return undefined;
};

const mapYield = (node?: any): string | undefined => {
  // yields can be a string or an array of strings. if it's an array, we want
  // the last item (example: ["5", "5 servinces"])

  if (!node) {
    return undefined;
  }

  return Array.isArray(node) ? node[node.length - 1] : node;
};
