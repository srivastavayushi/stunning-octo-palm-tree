const express = require("express");
const connectDB = require("./config/db");

const app = express();

//Connect Database
connectDB();

app.get("/", (req, res) => {
  res.send("API still running, why exactly?");
});

// Body-Parser-Middleware Init

app.use(express.json({ extended: false }));

//Route Setup
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/transaction", require("./routes/api/transactions"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/users", require("./routes/api/user"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Dev-Connector listening at http://localhost:${PORT}`);
});
