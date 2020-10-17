const User=require('../../../models/user');
const jwt=require('jsonwebtoken');
const env=require('../../../config/environment');

module.exports.createSession = async function(req, res){
         // req.flash('success', 'Logged in Successfully');
         // return res.redirect('/');
         try{
                  let user=await User.findOne({email:req.body.email});
                  if(!user || user.password!=req.body.password){
                          return res.json(422,{
                                    message:'Invalid Username'
                           })
                  }
                  return res.json(200,{
                  message:'here is your token',
                  data:{
                           token:jwt.sign(user.toJSON(),env.jwt_secret,{expiresIn:'100000'})
                  }
                  })
         }
         catch(error){
return res.json(500,{
         message:'Internal server Error'
})
         }
         // let user=await User.findOne({email:req.body.email});
     }