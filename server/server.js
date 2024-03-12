require("dotenv").config();

const express = require("express");
const app = express();
const router = require("./routes/auth-route");
const testRoute = require("./routes/testing-route");
const dbConnection = require("./db/db");

app.use(express.json());

app.use("/api/auth", router);
app.use("/api/test", testRoute);

// app.get('/', (req, res) => {
//   res.status(200).send('MERN Training');
// });

// app.get('/register', (req, res) => {
//   res.status(200).send('Register Page');
// });

const PORT = 5000;
dbConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
  });
});