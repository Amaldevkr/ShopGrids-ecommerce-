const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://amaldevkr:73127312@cluster0.b0nup.mongodb.net/test?retryWrites=true&w=majority',{
useNewUrlParser:true,
useUnifiedTopology:true
}).then(connect => {
    console.log(`Mongodb successfully conneced to: ${connect.connection.host}`)

})
