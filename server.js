const express = require("express");
const app = express();
const transportRoutes = require("./routes/transportRecord");

app.use(express.json());
app.use("/api/transport", transportRoutes);

app.listen(3000, () => {
  console.log("✅ Server running on http://localhost:3000");
});
