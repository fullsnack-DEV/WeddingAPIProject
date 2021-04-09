import app from "./app.js";
const port = 8000;

app.listen(port, () => {
  console.log("I am Running");
});

app.get("/", (req, res) => {
  res.send("hello from the server");
});
