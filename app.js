const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");

require("dotenv").config();
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");
const User = require("./models/user");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use((req, res, next) => {
  User.findById("632d73426a6e61fc06080e2e")
    .then((user) => {
      // console.log(user);
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(errorController.getError);
mongoose
  .connect(
    `mongodb+srv://maryam-tb:${process.env.MONGO_DB_PASSWORD}@node-project.6mr8s0d.mongodb.net/test?retryWrites=true&w=majority`
  )
  .then((result) => {
    console.log("connected!");
    User.findOne()
      .then((user) => {
        !user &&
          new User({
            name: "Maryam",
            email: "test@test.com",
            cart: { items: [] },
          }).save();
      })
      .catch((err) => console.log(err));

    app.listen(8000);
  })
  .catch((err) => console.log(err));
