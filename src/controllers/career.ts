import { Request, Response } from "express";
import Recruit from "../models/recruit";

/**
 * GET /
 * index page.
 */
export let index = (req: Request, res: Response) => {
  getRecruit(5).then((results) => {
    console.log("results: ");
    console.log(results);
    res.render("career/index", {
      title: "Careers",
      recruits: results
    });
  });
};

const getRecruit = async (limit = 10) => {
  return await Recruit.find().limit(limit);
};

