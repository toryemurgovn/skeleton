import { Request, Response } from "express";
import Recruit from "../../models/recruit";

export let recruit = (req: Request, res: Response) => {
  getRecruit(5).then((results) => {
    console.log("results: ");
    console.log(results);
    res.render("admin/recruit", {
      title: "Recruiting Posts",
      recruits: results
    });
  });
};

const getRecruit = async (limit = 10) => {
  return await Recruit.find();
};
