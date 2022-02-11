const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const { response } = require("express");

const app = express();

app.use(express.json());
app.use(cors());
const insert = () => {
  const db = mysql.createConnection({
    host: "sql6.freesqldatabase.com",
    user: "sql6467743",
    password: "HxJA4LYkRu",
    database: "sql6467743",
    port: 3306,
  });

  app.post("/register", async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const teacher = req.body.teacher;
    if (name.length > 0 && email.length > 0 && password.length > 0) {
      await db.query(
        "INSERT INTO users (name, email, password, teacher) VALUES (?,?,?,?)",
        [name, email, password, teacher],
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

  app.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    await db.query(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [email, password],
      (err, result) => {
        if (err) {
          res.send(err);
        }
        if (result.length != 0) {
          console.log(result);
          res.send({ sqlMessage: "Verified" });
        } else res.send({ sqlMessage: "Incorrect Username/Password" });
      }
    );
  });

  app.get("/homet", async (req, res) => {
    await db.query("SELECT * FROM courses", (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });
  app.post("/homet", async (req, res) => {
    const name = req.body.name;

    await db.query(
      "INSERT INTO courses (name) VALUES (?)",
      [name],
      (err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      }
    );
  });
  app.post("/hometx", async (req, res) => {
    const name = req.body.name;
    await db.query(
      "DELETE FROM courses WHERE name = ?;",
      [name],
      (err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      }
    );
  });
};

insert();
app.listen(3001);
