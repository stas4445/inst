const Router = require("express");
const router = new Router();

const userRouter = require("./userRouter");
const postRouter = require("./postRouter");
const commentRouter = require("./commentRouter");
const likeRouter = require("./likeRouter");
const followRouter = require("./followRouter");

router.use("/user", userRouter);
router.use("/post", postRouter);
router.use("/comment", commentRouter);
router.use("/like", likeRouter);
router.use("/follow", followRouter);

module.exports = router;
