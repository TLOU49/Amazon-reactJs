/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51NH2WxGD08KuOGkHdvJ7sy4jFgMlMlZyC6UmtT3kYgiS3n3XKgvWpY3ouJNnonyKM7L2om9sYd9TPuDedIdpSPWi00ygIWSnlk"
);

//- API

//- APP Config
const app = express();
//- Middlewares
app.use(cors({ origin: true }));

//- API Routes
app.get("/", (req, res) => res.status(200).send("Hello World!"));

//Listen Commands
exports.api = functions.https.onRequest(app);
