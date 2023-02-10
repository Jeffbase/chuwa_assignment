var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

const jwt = require("jsonwebtoken");
const SECRET = "Ijusttypeanythingberadomalohdhfglskdfg";

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
// app.use("/users", usersRouter);

//mock database
const users = {
  admin: "admin",
  ss111: "111",
};

//mock product database
const products = [
  {
    id: 1576996323453,
    productName: "Iphone11",
    productDescription: "This is a product description",
    productPrice: "499",
    productQuantity: "100",
    productImage:
      "https://i5.walmartimages.com/asr/52a8a553-1dc9-4263-af1f-c8750bbf7605.b950d0f9a7eb260800e691affbc1e553.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF",
  },
];

//1. get method
app.get("/api/users", (_, res) => {
  res.send(users);
});
//2.post method
app.post("/api/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username, password);
  if (!(username in users)) {
    users[username] = password;
    console.log(users);
    res.json({ message: `user ${username} register successfully` });
  } else {
    return res.status(422).json({ message: "user exist" });
  }
});

//2. post user login
app.post("/api/login", (req, res) => {
  console.log(req.body);
  const username = req.body.username;
  const password = req.body.password;
  if (!(username in users)) {
    return res
      .status(422)
      .json({ error: "failed", message: "username not exist" });
  }

  if (password != users[username]) {
    return res.status(422).json({ message: "password not valid" });
  }

  const jwtToken = jwt.sign(
    {
      email: username,
    },
    SECRET
  );

  res.json({ message: "login", token: jwtToken });
});

const auth = (req, res, next) => {
  const raw = String(req.headers.authorization).split(" ").pop();
  const user = jwt.verify(raw, SECRET).email;
  req.user = user;
  next();
};
//get all product
app.get("/api/products", (req, res) => {
  res.send(products);
});
//add product api
app.post("/api/add", (req, res) => {
  const product = req.body.product;
  console.log(product);
  const id = product.id;
  products.forEach((curr) => {
    if (curr.id === id) {
      res.status(404).json({ message: "product exist" });
    }
  });

  products.push(product);
  console.log(products);
  res.json({ message: "added new product" });
});
//edit product api
app.put("/api/edit", (req, res) => {
  const id = req.body.product.id;
  const _product = req.body.product;
  let found = false;
  products.forEach((product, index) => {
    if (product.id === id) {
      found = true;
      product.productName = _product.productName;
      product.productDescription = _product.productDescription;
      product.productPrice = _product.productPrice;
      product.productQuantity = _product.productQuantity;
      product.productImage = _product.productImage;
      res.json({ message: `edit ${product.productName} successfully` });
    }
  });
  if (!found) {
    res.status(404).json({ message: "product unknown" });
  }
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
