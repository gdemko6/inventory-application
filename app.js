const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", require("./routes/indexRoutes"));
app.use("/categories", require("./routes/categoryRoutes"));

app.listen(3000);