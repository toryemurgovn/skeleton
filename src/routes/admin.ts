import { Router } from  "express";
// Admin Controllers
import * as adminHomeControler from "../controllers/admin/home";
import * as recruitController from "../controllers/admin/recruit";
const router = Router();

// middleware that is specific to this router
router.use("/*", (req, res, next) => {
  console.log("Admin middleware");
  console.log("Time: ", Date.now());
  next();
});

// define the home page route
router.get("/",  adminHomeControler.index);

router.get("/recruit", recruitController.recruit);

module.exports = router;