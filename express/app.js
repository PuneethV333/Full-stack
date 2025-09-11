const express = require('express');
const morgan = require('morgan');
const app = express();
const userModel = require('./models/user');
const dbconnection = require('./config/db');

// set view engine
app.set("view engine", "ejs");

// morgan -> a 3rd party middleware
app.use(morgan('dev'))

// built-in body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

// middleware
app.use((req, res, next) => {
    console.log('this is middleware')
    const a = 2;
    const b = 2;
    console.log(a + b);

    return next()
})

app.post('/get-form-data', (req, res) => {
    console.log(req.body)   // ✅ now prints form data
    res.send('data received')
})

// routes
app.get('/', (req, res) => {
    res.render('index');
});





app.get('/register', (req, res) => {
    res.render('register')
})


app.post('/register', async (req, res) => {
    console.log(req.body)
    const { username, email, password } = req.body
    await userModel.create({
        username: username,
        email: email,
        password: password,
    })
    res.send("user register")
})


app.get('/get-uesrs', (req, res) => {
    userModel.find().then((uesrs) => {
        res.send(uesrs)
    })
})
app.get('/get-uesrs-one', (req, res) => {
    userModel.findOne({
        userName: puneeth
    }).then((uesrs) => {
        res.send(uesrs)
    })
})



app.get('/update-user',async (req,res) => {
    await userModel.findOneAndUpdate({
        username: 'a'
    },{
        email:"c@c.com"
    })
    res.send('user uptadated')
})

app.get('/delete',async (req,res) => {
    await userModel.findOneAndDelete({
        username:'a'
    })
    res.send("user deleted")
})






app.get('/profile', (req, res) => {
    res.send('profile');
});

// start server
app.listen(4000, () => {
    console.log('Server running on http://localhost:4000');
});
