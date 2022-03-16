import express from "express";
import path from "path";

import routes from "../routes";
import renderToString from "./utils/renderToString";

const app = express();
const port = Number(process.env.PORT || 5000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", (_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  next();
});
app.use("/", express.static(path.resolve("public")));

routes
  .filter((item) => item.controller != undefined)
  .map(
    (item) => item.controller && app[item.method](item.path, item.controller)
  );

app.get("**", (req, res) => {
  return res.send(renderToString(req.url));
});

app.listen(port, () => {
  console.log(`> ready on http://localhost:${port}`);
});
