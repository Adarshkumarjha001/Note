const mongoose = require("mongoose");

const MONGODB_URI =
  "mongodb+srv://ritiksah99344:O7hUhmmwYnnsK7Cc@notess.etjc6xk.mongodb.net/";
mongoose
  .connect(MONGODB_URI, {
    
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to mongoDb");
  })
  .catch((err) => {
    console.log(err.message);
  });


// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/noteme');

//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }