const { Router } = require("express");
const newRouter = Router();
const messages = require("../public/messages");

newRouter.get("/", (req,res) => {
    res.render("form",)
})

newRouter.post("/", (req, res) => {
    const {messageText, messageUser} = req.body;
    messages.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect("/");
})

module.exports = newRouter;