require("./db/connection");
const express = require('express');
const userRouter = require("./user/routes");
const movieRouter = require("./movie/routes");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(movieRouter);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});