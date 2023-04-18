const { DEFAULT_ENCODING } = require('crypto');
const jwt = require('jsonwebtoken');
const path=require('path')
const accConnection = require("../../config/db/account.js");
class LoginController{
    render(req,res)
    {
        
            res.sendFile(path.join(__dirname,'../../../login.html'))
    }
    checkAndSendToken(req,res)
    {
        async function check ()
        {
            console.log('check');
            console.log(req.body.username);
            var result=await accConnection.query(`SELECT EXISTS(SELECT * FROM Login WHERE username='${req.body.username}' AND password='${req.body.password}') AS Existing`)
            const check=result[0][0];
            console.log();
            if(check.Existing)
            {
               var token=  jwt.sign({user:req.body.username},'mk')
               res.cookie('token', token);
               res.redirect('/')
            }
            else{
                res.json('Login failed => username or password undefined');
            }
        }
        check()
    }
    checkToken(req,res,next)  {
        try{
            console.log('kiem tra');
            var ketqua=jwt.verify(req.cookies.token,'mk')
            console.log('finish');
            next();
        }
        catch(err){
            return res.json('Authentication fail -> Login is required')
        }
    }
}

module.exports=new LoginController()