const app = require("./app");
const port = 8000;

app.listen(port, () => {
  console.log("development Server working!");
});

//instead of putting all the HTTP methods in One Separte file

// app.get("/", (req, res) => {
//   res.send("hello from the server");
// });
