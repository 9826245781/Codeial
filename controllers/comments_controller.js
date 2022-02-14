const mongoose = require('mongoose');
const Comment = require('../models/comment');
const Post=require('../models/post');

module.exports.create=function(req,res){
    console.log(req.body);
   Post.findById(req.body.post,function(err,post){
       if(err) {console.log("Error in creating comment",err); return;}

       if( post )
       {
Comment.create({
    content:req.body.content,
    post:req.body.post,
    user:req.user._id
},function(err,comment){
    if(err) {console.log("Error in updating comment",err); return;}

post.comments.push(comment);
post.save();
res.redirect('/');
});
       }
   });
 }

