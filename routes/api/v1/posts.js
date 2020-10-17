const express = require('express');
const passport=require('passport');
const router = express.Router();
const postsApi=require('../../../controllers/api/v1/posts_api');
router.delete('../:id',passport.authenticate('jwt',{session:false}),postsApi.destroy);
router.get('/',postsApi.index);
module.exports=router;