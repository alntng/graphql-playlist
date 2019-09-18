const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//allow cross origin requests
app.use(cors());

//connect tomlab database
mongoose.connect(
  "mongodb+srv://alan:mongotest@cluster0-221yf.mongodb.net/test?retryWrites=true&w=majority"
);

mongoose.connection.once("open", () => {
  console.log("Connected to Mongo DB");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("Now listening on port 4000");
});
