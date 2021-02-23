const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51I4FuOJun96ThdqJG3I1GAMPs4dkF9tZW01DPpxlZbtJNJMN89fBjnY8cuITbyFJtsbHCOucU3faJUfFXPeTLRJM00QUfRSmGc"
);

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// - Listen command
exports.api = functions.https.onRequest(app);

//  http://localhost:5001/clone-b9763/us-central1/api
