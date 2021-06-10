const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const { response } = require("express");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "logindb",
});

app.post("/register", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  if (name.length > 0 && email.length > 0 && password.length > 0) {
    db.query(
      "INSERT INTO users (name, email, password) VALUES (?,?,?)",
      [name, email, password],
      (err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ sqlMessage: "Registration Successful" });
        }
      }
    );
  } else {
    res.send({ sqlMessage: "Fill all Fields" });
  }
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result.length != 0) {
        res.send({ sqlMessage: "Verified" });
      } else res.send({ sqlMessage: "Incorrect Username/Password" });
    }
  );
});

app.listen(3001);
