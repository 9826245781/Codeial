// const user = require('../models/user');
const User=require('../models/user');




module.exports.profile=function(req,res){
if(req.cookies.user_id){
User.findById(req.cookies.user_id,function(err,user){
    if(err){
        console.log("Error in finding user in signing up");
        return;
    }
    if(user){
        return res.render('user_profile',{
            title:"Profile",
             user:user
            });
    }
    return res.redirect('/users/sign-in')
});
}
else{
    return res.redirect('/users/sign-in')
}
}
//render sign up page

module.exports.signUp=function(req,res){
    return res.render('user_signup',{
        title:"Codeial | Signup"
    });
}

//render sign in page
module.exports.signIn=function(req,res){
    return res.render('user_signin',{
        title:"Codeial | Signin"
    })
    
}
//sign out
module.exports.signOut=function(req,res){
  
  res.cookie('user_id',678 ); 
     return res.redirect('/users/sign-in')
}




// get the sign up data
module.exports.create=function(req,res){
if(req.body.password!=req.body.confirm_password)
return res.redirect('back');


User.findOne({email:req.body.email},function(err,user){
    if(err){
        console.log("Error in finding user in signing up");
        return;
    }

    if(!user){
        User.create(req.body,function(err,user){
            if(err){
                console.log("Error in finding user in signing up");
                return;
            }
            return res.redirect('/users/sign-in');
        })
    }else{
        return res.redirect('back');
    }
})

}



module.exports.createSession=function(req,res){
//find the user
User.findOne({email : req.body.email},function(err,user){
    if(err) console.log("User not found in signing in");
//handle user found

if(user){
//handle mismatching pass which dont match
if(user.password!=req.body.password){
    return res.redirect('back');
}

//handle session creation
res.cookie('user_id',user.id);
return res.redirect('/users/profile');



}else{
//handle user not found
return res.redirect('back');
}

});

}