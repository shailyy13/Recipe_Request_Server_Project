const errorHandler = require("./middlewares/errorHandler");
const connectDb = require("./config/dbConnections");
const express = require("express");
const app = express();
const port = 7000;

connectDb();
app.use(express.json());
app.use("/api/recipes",require("./routes/recipeRouter"));
app.use(errorHandler);
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});