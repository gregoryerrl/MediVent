// src/mockServiceWorker.js
import { setupWorker, rest } from "msw";

const worker = setupWorker(
  // Mock the endpoint for enabling the bill acceptor
  rest.post(
    "http://localhost:5000/api/enable_bill_acceptor",
    (req, res, ctx) => {
      return res(ctx.json({ message: "Bill acceptor enabled (mocked)" }));
    }
  ),

  // Mock the endpoint for disabling the bill acceptor
  rest.post(
    "http://localhost:5000/api/disable_bill_acceptor",
    (req, res, ctx) => {
      return res(ctx.json({ message: "Bill acceptor disabled (mocked)" }));
    }
  ),

  // Mock the endpoint for getting the bill value
  rest.get("http://localhost:5000/api/get_bill_value", (req, res, ctx) => {
    return res(ctx.json({ total_value: 100 })); // Mocking a return value of 100
  }),

  // Mock the endpoint for processing the payment
  rest.post("http://localhost:5000/api/process", (req, res, ctx) => {
    return res(
      ctx.json({ success: true, message: "Process completed (mocked)" })
    );
  })
);

worker.start();
