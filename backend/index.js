const express = require("express");
const taskRoutes = require("./routes/taskRoutes");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config({ path: __dirname + "/.env" });

app.use(express.json());
app.use(cors());

app.use("/task", taskRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server listning on port no:", PORT);
});
