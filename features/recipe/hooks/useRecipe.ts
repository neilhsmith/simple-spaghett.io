import { useEffect, useState } from "react";
import type { GetRecipeError, GetRecipeResponse, Recipe } from "..";

export const useRecipe = (url: string, l = true) => {
  const [loading, setLoading] = useState(l);
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [error, setError] = useState<GetRecipeError | null>(null);

  useEffect(() => {
    const fetchRecipe = async () =>
      await fetch(`api/recipe?url=${encodeURIComponent(url)}`, {
        method: "GET",
      });

    fetchRecipe()
      .then((res) => res.json())
      .then((result: GetRecipeResponse) => {
        setLoading(false);

        // FIXME: shouldn't have to do this string check. we should know what val is based on ok
        if (result.ok && typeof result.val !== "string") {
          setRecipe(result.val);
        } else if (!result.ok && typeof result.val === "string") {
          setError(result.val);
        }
      })
      .catch(() => {
        setLoading(false);
        setError("ERR_UNEXPECTED");
      });
  }, [url]);

  return {
    loading,
    ok: !!recipe,
    recipe,
    error,
  };
};
