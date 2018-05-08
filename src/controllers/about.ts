import { Request, Response } from "express";

/**
 * GET /
 * index page.
 */
export let index = (req: Request, res: Response) => {
  res.render("about/index", {
    title: "About"
  });
};
