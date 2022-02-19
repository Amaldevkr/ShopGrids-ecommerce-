const express = require('express')
const User = require('../models/user-register')


require('../utils/db.config')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  const products = [
    {
      no: '1',
      image: 'assets/images/products/product-3.jpg',
      category: 'camera',

      price: '500'
    },
    {
      no: '2',
      image: 'assets/images/products/product-2.jpg',
      category: 'speaker',
      title: 'boom speaker 6x plus',
      price: '400'
    },
    {
      no: '3',
      image: 'assets/images/products/product-4.jpg',
      category: 'phone',
      title: 'iphone 6x plus',
      price: '200'
    }
  ]
  res.render('user/view-products', { products, admin: false })
})

router.get('/login', function (req, res, next) {
  res.render('user/login', { admin: false })
})
router.post('/login', function (req, res, next) {
  res.redirect('/varify-otp')
})
router.get('/varify-otp',function(req,res){
  res.render('user/varify-otp',{admin:false})
})

router.post('/varify-otp', function (req, res, next) {
  res.redirect('/')
})

router.get('/signup', (req, res) => {
  res.render('user/signup', { admin: false, user: '' })
})
router.post('/signup', async (req, res, next) => {
  
  const user = new User(req.body)
  
  await user.save()
  console.log(req.body)
  res.render('user/signup', {user:"" ,admin: false })
 
})
// router.post('/signup',(req,res)=>{
//   console.log(req.body);
//   const user = new User(req.body)
//   user.doSignup(user,(result)=>{
    
//     res.redirect('/login')
//   })
// })

module.exports = router
