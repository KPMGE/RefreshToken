import { app } from "./app";
import { routes } from "./routes";

app.use(routes);

const port = 3333;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
