const Transaction = require("../models/Transaction");
const User = require("../models/User");

// @desc : Gets all transactions
// @route : GET /api/transactions
// @access: PRIVATE

exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();

    res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc : Add transaction history
// @route : POST /api/transaction
// @access: PRIVATE

exports.addTransaction = async (req, res, next) => {
  try {
    const { text, amount, description, payee, receiver, createdAt } = req.body;

    const payeeFinal = await User.findById(req.user.id);
    const receiverFinal = await User.findById(req.user.id);

    const transaction = await Transaction.create(req.body);

    res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

// @desc : Delete transaction
// @route : DELETE /api/transaction:id
// @access: PRIVATE

exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      res.status(404).json({
        success: false,
        error: "No transaction found",
      });
    } else {
      await transaction.remove();
      return res.status(200).json({
        success: true,
        data: [],
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
