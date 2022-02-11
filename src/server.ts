import { app } from "./app";

app.get("/", (req, res) => {
  res.send("Server up");
});

const port = 3333;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
