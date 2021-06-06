// GET TRANSACTION

async function getTransaction() {
  try {
    const res = await axios.get("/api/transactions");

    dispatch({
      type: "GET_TRANSACTIONS",
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: "TRANSACTION_ERROR",
      payload: err.response.data.err,
    });
  }
}

// DELETE TRANSACTION
async function deleteTransaction(id) {
  try {
    await axios.delete(`/api/transactions/${id}`);
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: "TRANSACTION_ERROR",
      payload: err.response.data.err,
    });
  }
}

// ADD TRANSACTION
async function addTransaction(transaction) {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post("/api/transactions", transaction, config);
    dispatch({
      type: "ADD_TRANSACTION",
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: "TRANSACTION_ERROR",
      payload: err.response.data.err,
    });
  }
}
