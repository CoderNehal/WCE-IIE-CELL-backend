const router = require('express').Router()
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");
const { db } = require('../../utils/db');

const age = 24 * 60 * 60 * 3;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.Secrete_key, {
    expiresIn: age,
  });
};
router.post('/login', (req, res) => {
    console.log("sukh ke sab baghi :",req.body)
    const {username,password}=req.body;
    // console.log(username,password)
    try{
       if(username==='Admin@iie-cell-wce' && password==='WCE@IIE-CELL-1947')
       {
        token=createToken(password);
       
        // res.cookie("jwt", token, { maxAge: age * 1000 ,httpOnly:false,samesite:false});
        res.json({ "Success": true ,jwt:token});
       }else{
        res.json({"Success":false,message:"Invalid username or password"})
       }
        

    }catch(err)
    {
        res.json({"Success":false,"message":err});
    }



})
router.get('/signup', (req, res) => {
res.send("Hellowwww")
})
module.exports = router