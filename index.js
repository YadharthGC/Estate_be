const express = require("express");
const app = express();
const cors = require("cors");
require("./db");
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3002;

const ensureRouter = require("./ensureRoutes");
app.use("/ensurePost", ensureRouter);

app.listen(port, () => {
  console.log("running on 3002");
});
