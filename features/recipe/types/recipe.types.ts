export type Recipe = {
  categories?: string[];
  cookTime?: number;
  cuisine?: string[];
  description?: string;
  ingredients: string[];
  instructionSections: InstructionSection[];
  keywords?: string[];
  name: string;
  nutrition?: Nutrition;
  prepTime?: number;
  recipeYield?: string;
  totalTime?: number;
  url?: string;
};

export type InstructionSection = {
  name?: string;
  instructions: Instruction[];
};

export type Instruction = {
  name?: string;
  text: string;
};

export type Nutrition = {
  calories?: string;
  carbohydrateContent?: string;
  cholesterolContent?: string;
  fatContent?: string;
  fiberContent?: string;
  proteinContent?: string;
  saturatedFatContent?: string;
  servingSize?: string;
  sodiumContent?: string;
  sugarContent?: string;
  transFatContent?: string;
  unsaturatedFatContent?: string;
};
