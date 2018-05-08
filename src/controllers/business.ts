import { Request, Response } from "express";

/**
 * GET /
 * index page.
 */
export let index = (req: Request, res: Response) => {
  res.render("business/index", {
    title: "Business Lines"
  });
};
