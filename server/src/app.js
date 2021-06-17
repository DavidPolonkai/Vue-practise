const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const defaultRouter = require("./router/defaultRouter");
const todoRouter = require("./router/todoRouter");
const authRouter = require("./router/authRouter");

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());
app.use('/test', defaultRouter);
app.use(todoRouter);
app.use(authRouter);

app.listen(process.env.PORT || 8081)

const mongo = require("mongodb");





