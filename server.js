const dotenv = require("dotenv");
const mongoose = require("mongoose");

process.on("uncaughtException", (err) => {
  console.log("UNHANDLED Exception! Shutting Down...");
  console.log(err.name, err.message);
  process.exit(1);
});

const app = require("./index.js");
dotenv.config({path: "./config.env"});

/*const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);*/

/*const connectionString = (process.env.DATABASE =
  !"Error querySrv ESERVFAIL _mongodb._tcp.cluster0.f7q5i6k.mongodb.net"
    ? process.env.DATABASE
    : process.env.DATABASE_LOCAL);*/

mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    //useUnifiedTopology: true,
  })
  .then((con) => {
    console.log(
      "Database connection succesfull..." + process.env.DATABASE_LOCAL
    );
  });

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App Running on port ${port}...`);
});

process.on("unhandledRejection", (err) => {
  //console.log(err.name, err.message);
  console.log("UNHANDLED REJECTION! Shutting Down...");
  console.log(err.name, err.message);

  server.close(() => {
    process.exit(1);
  });
});
