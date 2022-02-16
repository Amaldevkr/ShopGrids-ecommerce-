var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  let products = [
    {
      no:"1",
      image: "assets/images/products/product-3.jpg",
      category: "camera",
      title: "zoom 6x plus",
      price: "500"
    },
    {
      no:"2",
      image: "assets/images/products/product-2.jpg",
      category: "speaker",
      title: "boom speaker 6x plus",
      price: "400"
    },
    {
      no:"3",
      image: "assets/images/products/product-4.jpg",
      category: "phone",
      title: "iphone 6x plus",
      price: "200"
    }
  ]
  res.render('admin/view-products',{products,admin:true});
});



router.get('/add-products',function(req , res){
  res.render('admin/add-products', {admin:true})
});

router.post('/add-products',function(req , res){
  res.render('admin/add-products', {admin:true})
});



module.exports = router;
