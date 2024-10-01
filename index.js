

require('dotenv').config()
const express = require('express')
const app = express()
const port  = 3000


// console.log( typeof app)

app.get('/', function(req,res){
     res.send('Hello World!!')
})

app.listen(process.env.PORT ,function(){
     console.log(`Listening on the port ${port}`)
})


app.get('/login', function(req,res){
  res.send('<h1>Login at Chai aur Code</h1>')
})

