const express =require('express');
const app = express();
const path = require ('path');
const qrcode = require('qrcode');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set('views',path.join(__dirname,"views"))

app.get('/',(req,res)=>{
  res.render('index')
})

app.post('/qrcodelink',(req,res)=>{
    const inputdata = req.body.qrcodedata;
    console.log(inputdata);
    qrcode.toDataURL(inputdata,(error,data)=>{

        res.render('thankyou',{prasath:data})
    })
})
app.listen(10000,()=>{
 console.log("port connected");
})