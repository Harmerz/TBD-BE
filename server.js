const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()

const userController = require('./controller/user.controller')



const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/api/user', (req, res) => {
    userController.getuser().then(data => res.json(data));
});

app.post('/api/login', (req, res) => {
    userController.loginUser(req.body.user).then(data => res.json(data));
});

app.post('/api/user', (req, res) => {
    console.log(req.body);
    userController.createuser(req.body.user).then(data => res.json(data));
});

app.put('/api/user', (req, res) => {
    userController.updateuser(req.body.user).then(data => res.json(data));
});

app.delete('/api/user/:id', (req, res) => {
    userController.deleteuser(req.params.id).then(data => res.json(data));
});



app.get('/', (req, res) => {
    res.send(`<h1>API Works !!!</h1>`)
});



app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})