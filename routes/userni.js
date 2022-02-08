const express=require('express');
 const router=express.Router();

 const nameCntrl=require('../controllers/userni_cntrl');


router.get('/name',nameCntrl.name);

 module.exports=router;