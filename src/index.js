import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";


dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDb connection failed", error);
  });

// This Below code is another way to write Database connectin but now i use to seperate the code in db folder

// import express from "express";
// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.NONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("ERRR", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`Application is listeneing on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("Error:", error);
//     throw err;
//   }
// })();
