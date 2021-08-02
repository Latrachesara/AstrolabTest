const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
require("./Config/DataBase");

const AuthRoute = require("./routers/AuthRoute");
const UserRoute = require("./routers/UserRoute");
const PostRoute = require("./routers/WishlistRoute");
const port = process.env.PORT || 4000;
app.use(express());
app.use(express.json());
app.use(cookieParser());
app.use(AuthRoute);
app.use(UserRoute);
app.use(WishlistRoute);
app.listen(port, () => {
  console.log(`server running on port : ${port}`);
});