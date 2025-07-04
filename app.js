const express = require("express");
const app = express();

//For ENV variables
require("dotenv").config();


const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");

//For EJS (HTML)
const path = require("node:path");

//For Views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//For static assets (CSS)
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

//For forms
app.use(express.urlencoded({ extended: true }));




const PORT = process.env.NODE_ENV === "prod" ? process.env.PORT : 8080;





app.use("/",indexRouter);
app.use("/new",newRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})