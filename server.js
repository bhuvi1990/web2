const express = require('express');
const app = express();
const bodyParser = require('body-parser');

/* handling all the parsing */
app.use(bodyParser.json());

app.post('/',(req,res)=>{
  var email = req.body.email;
  var amount = req.body.amount;

  if(amount <=1){
    return_info = {};
    return_info.error = true;
    return_info.message = "The amount shoud be greater than one";
    return res.send(return_info);
  }

  res.send({"amount" : amount , "email" : email });
})
app.get('/',(req,res) =>{
  res.send("HELLO WEB 2.0");
})
console.log('Hello web 2.0');

app.listen(3000,()=>{
  console.log('server is running on port 3000');
});
