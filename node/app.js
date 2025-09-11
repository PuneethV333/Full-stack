const express = require('express');
const userRoute = require('./routes/user.routes');
const dotenv = require('dotenv');
const connectToDB = require('./config/db');

dotenv.config();


connectToDB();

const app = express();




app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/user', userRoute)

app.listen(3000, () => {
    console.log('port -> 3000')
})
