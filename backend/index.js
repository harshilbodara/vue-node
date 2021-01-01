const express = require("express");
const chalk = require('chalk');
const app = express();
const PORT = process.env.PORT | 5000;



app.listen(PORT,()=>{
    console.log(chalk.black.bgWhiteBright.bold("server runing:",PORT))
})