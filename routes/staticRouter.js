const express = require('express')
const URL = require('../models/url')
const { restrictTo } = require('../middlewares/auth')
const router = express.Router()

router.get('/admin/urls', restrictTo(['Admin']), async (req,res)=>{
 
    const allURls = await URL.find({})
    return res.render('home',
      { urls:  allURls}
    )
})

router.get('/', restrictTo(['NORMAL','Admin']), async (req,res)=>{
 
    const allURls = await URL.find({ createdBy : req.user._id})
    return res.render('home',
      { urls:  allURls}
    )
})
router.get('/signUp',(req,res)=>{
  res.render('signup')
})
router.get('/login',(req,res)=>{
  res.render('login')
})
module.exports = router