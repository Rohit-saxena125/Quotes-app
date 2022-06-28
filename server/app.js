const express = require('express');
const quote = require('inspirational-quotes');
const app = express();
app.get("/", function (req, res){
    res.send(quote.getQuote());
});
let port = process.env.PORT ;
if (port == null || port == "") {
  port = 5000;
}
app.listen(port,function () {
    console.log("Server is running on port " + port);
});
app.use(function (req,res,next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
});