import type { NextApiRequest, NextApiResponse } from "next";
import type { GetRecipeResponse } from "@features/recipe";
import { getRecipe } from "@features/recipe";

export const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<GetRecipeResponse>
) => {
  if (req.method === "GET") {
    try {
      const { url } = req.query as { url: string };
      const result = await getRecipe(url);

      if (result.ok) {
        res.status(200).json({
          ok: true,
          val: result.val,
        });
      } else {
        res.status(500).json({
          ok: false,
          val: result.val,
        });
      }
      res.end();
    } catch (error) {
      res.status(500).json({
        ok: false,
        val: "ERR_UNEXPECTED",
      });
    }
  } else {
    res.status(405).end();
  }
};

export default handler;
