const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const {
  getTransactions,
  addTransaction,
  deleteTransaction,
} = require("../../controllers/transaction");

// router.get("/", auth, (req, res) => {
//   res.send("TRANSACTION ROUTE : PROTECTED ROUTE");
// });

module.exports = router;

router.route("/").get(auth, getTransactions).post(auth, addTransaction);
router.route("/:id").delete(auth, deleteTransaction);

module.exports = router;
