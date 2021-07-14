const express = require('express')
const app = express()
const port = 3050
const path = require('path')
const views = path.join(__dirname, 'views')

app.use(express.static('public'))

app.listen(port, () => console.log(`run server http://localhost:${port}`));

app.get('/', (req,res) => res.sendFile(path.join(views, 'home.html')))
app.get('/plantilla', (req,res) => res.sendFile(path.join(views, 'plantilla.html')))
app.get('/login', (req, res) => res.sendFile(path.join(views, 'login.html')))