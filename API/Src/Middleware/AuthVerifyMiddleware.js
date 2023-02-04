const Jwt = require("jsonwebtoken");

module.exports=(req, res, next)=>{

    let Token = req.headers["token-key"]

    Jwt.verify(Token, "123456789", (err, decode)=>{ //১২৩৪৫৬৭৮৯ হচ্ছে সিক্রেট কি, টোকেন যদি ঠিক থাকে তাহলে ডিকোড করে দিবে।
        
        if(err){
            res.status(401).json({status:"unauthorize, jwt auth token fail, middlewae fail", status_t:"decode fail"})
        }
        else{
            // তৈরি করা টোকেন ভেঙ্গে সেখান থেকে ইউজার নেম কে একটা ভ্যারিয়েবলে স্টোর করা হয়েছে
            let UserName = decode.data[0].UserName;
            req.headers.UserName = UserName; 
            // get UserName ইউজার নেম কে ইনকোড করে বডিতে এড করা হয়েছে

            next();
        }
    })

}