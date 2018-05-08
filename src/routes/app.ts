import { Router } from  "express";

// Controllers (route handlers)
import * as homeController from "../controllers/home";
import * as businessController from "../controllers/business";
import * as aboutController from "../controllers/about";
import * as contactController from "../controllers/contact";
import * as careerController from "../controllers/career";
const router = Router();

// middleware that is specific to this router
router.use("/*", (req, res, next) => {
  console.log("frontend middleware");
  console.log("Time: ", Date.now());
  next();
});

router.get("/", homeController.index);
router.get("/business-lines", businessController.index);
router.get("/about", aboutController.index);
router.get("/contact", contactController.index);
router.post("/contact", contactController.index);

router.get("/careers", careerController.index);

module.exports = router;