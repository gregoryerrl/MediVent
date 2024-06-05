import "./pages/transaction/mock.js";
import "./pages/transaction/transaction.js";
import "./pages/transaction/transaction.css";

// src/setupMocks.js
if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mockServiceWorker");
  worker.start();
}
