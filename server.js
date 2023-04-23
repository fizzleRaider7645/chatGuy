import express from "express";

const app = express();

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

app.get("/api/v1", (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log("Express app listening on port 3000");
});
