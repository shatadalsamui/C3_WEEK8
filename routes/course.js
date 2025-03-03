const {Router} = require("express");
const {userMiddleware} = require("../middleware/user");
const {purchaseModel} = require("../db");
const courseRouter = Router();

courseRouter.get("/purchase", userMiddleware, async function (req, res) {
    const userId = req.userId;
    const courseId = req.body.courseId;

    await purchaseModel.create({
        userId,
        courseId
    })
    res.json({
        message: "course purchased"
    })
})

courseRouter.post("/preview", async function (req, res) {
    const courses = await courseModel.find({});

    res.json({
        course
    })
})

module.exports = {
    courseRouter: courseRouter
}