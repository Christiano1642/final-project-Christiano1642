import express from "express";
import config from "./config.js";
import router from "./routes/index.js";

const app = express();

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.use("/api", router);
app.use(express.json());

app.listen(config.port, () => {
  console.log(`Server 🏃🏾‍♂️ at: http://localhost:${config.port}`);
});
