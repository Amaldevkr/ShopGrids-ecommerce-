var express = require('express');

var db=require('../utils/db.config')
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
  let products = [
    {
      no: "1",
      image: "assets/images/products/product-3.jpg",
      category: "camera",
  
      price: "500"
    },
    {
      no: "2",
      image: "assets/images/products/product-2.jpg",
      category: "speaker",
      title: "boom speaker 6x plus",
      price: "400"
    },
    {
      no: "3",
      image: "assets/images/products/product-4.jpg",
      category: "phone",
      title: "iphone 6x plus",
      price: "200"
    }
  ]
  res.render('user/view-products', { products, admin: false });
});

router.get('/login', function (req, res, next) {
  res.render('user/login', { admin: false });
});
router.post('/login', function (req, res, next) {
res.redirect('/')
});

router.get('/signup',(req,res)=>{
  res.render('user/signup',{admin:false,user: ''})
  
})
router.post('/signup',function(req,res){
  console.log(req.body);
 res.redirect('/login')
  
})

module.exports = router;
