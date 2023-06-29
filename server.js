const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");

const userController = require("./controller/user.controller");
const bookController = require("./controller/book.controller");
const addressController = require("./controller/address.controller");
const storeController = require("./controller/store.controller");
const writerController = require("./controller/writers.controller");
const staffController = require("./controller/staff.controller");
const paymentController = require("./controller/payment.controller");

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 204,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders:
    "Content-Type, Authorization, X-Requested-With, X-HTTP-Method-Override, Accept, Origin, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Access-Control-Allow-Methods, Access-Control-Allow-Credentials, XMLHttpRequest",
  accessControlAllowOrigin: "*",
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

//login and regist
app.get("/api/user", (req, res) => {
  userController.getuser().then((data) => res.json(data));
});

app.post("/api/login", (req, res) => {
  userController.loginUser(req.body.data).then((data) => res.json(data));
});

app.post("/api/register", (req, res) => {
  data = JSON.parse(req.body.data);
  userController.createuser(req.body.data).then((data) => res.json(data));
});

app.put("/api/user", (req, res) => {
  userController.updateuser(req.body.user).then((data) => res.json(data));
});

app.delete("/api/user/:id", (req, res) => {
  userController.deleteuser(req.params.id).then((data) => res.json(data));
});

//BOOKS
app.get("/api/book", (req, res) => {
  bookController.getbook().then((data) => res.json(data));
});

app.get("/api/book/:id", (req, res) => {
  bookController.getbookById(req.params.id).then((data) => res.json(data));
});

app.post("/api/book", (req, res) => {
  bookController.createbook(req.body).then((data) => res.json(data));
});

app.put("/api/book", (req, res) => {
  bookController.updatebook(req.body).then((data) => res.json(data));
});

app.delete("/api/book/:id", (req, res) => {
  bookController.deletebook(req.params.id).then((data) => res.json(data));
});

//Address
app.get("/api/address", (req, res) => {
  addressController.getaddress().then((data) => res.json(data));
});

app.post("/api/address", (req, res) => {
  addressController.createaddress(req.body).then((data) => res.json(data));
});

app.put("/api/address", (req, res) => {
  addressController.updateaddress(req.body).then((data) => res.json(data));
});

app.delete("/api/address/:id", (req, res) => {
  addressController.deleteaddress(req.params.id).then((data) => res.json(data));
});

//Store
app.get("/api/store", (req, res) => {
  storeController.getstore().then((data) => res.json(data));
});

app.get("/api/store/:id", (req, res) => {
  storeController.getstoreById(req.params.id).then((data) => res.json(data));
});

app.post("/api/store", (req, res) => {
  storeController.createstore(req.body).then((data) => res.json(data));
});

app.put("/api/store", (req, res) => {
  storeController.updatestore(req.body).then((data) => res.json(data));
});

app.delete("/api/store/:id", (req, res) => {
  storeController.deletestore(req.params.id).then((data) => res.json(data));
});

//Writer
app.get("/api/writer", (req, res) => {
  writerController.getwriters().then((data) => res.json(data));
});

app.post("/api/writer", (req, res) => {
  writerController.createwriters(req.body).then((data) => res.json(data));
});

app.put("/api/writer", (req, res) => {
  writerController.updatewriters(req.body).then((data) => res.json(data));
});

app.delete("/api/writer/:id", (req, res) => {
  writerController.deletewriters(req.params.id).then((data) => res.json(data));
});

//Staff
app.get("/api/staff", (req, res) => {
  staffController.getstaff().then((data) => res.json(data));
});

app.post("/api/staff", (req, res) => {
  staffController.createstaff(req.body).then((data) => res.json(data));
});

app.put("/api/staff", (req, res) => {
  staffController.updatestaff(req.body).then((data) => res.json(data));
});

app.delete("/api/staff/:id", (req, res) => {
  staffController.deletestaff(req.params.id).then((data) => res.json(data));
});

//Payment
app.get("/api/payment", (req, res) => {
  paymentController.getpayment().then((data) => res.json(data));
});

app.post("/api/payment", (req, res) => {
  paymentController.createpayment(req.body).then((data) => res.json(data));
});

app.put("/api/payment", (req, res) => {
  paymentController.updatepayment(req.body).then((data) => res.json(data));
});

app.delete("/api/payment/:id", (req, res) => {
  paymentController.deletepayment(req.params.id).then((data) => res.json(data));
});

app.get("/", (req, res) => {
  res.send(`<h1>API Works !!!</h1>`);
});

app.listen(port, () => {
  console.log(`Server listening on the port  ${port}`);
});
