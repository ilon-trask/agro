const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");
const techCartRouter = require("./techCartRouter");

router.use("/user", userRouter);
router.use("/cart", techCartRouter);

module.exports = router;
