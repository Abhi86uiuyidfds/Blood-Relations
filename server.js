const express = require('express')
const searchDocument =require("./document/document")
const app = express()
const port = 3000
const favicon = require('serve-favicon'); 
app.use(express.json());

const data = searchDocument.default



app.use(favicon(__dirname + '/favicon/favicon.ico')); 
app.use(favicon(__dirname + '/favicon/android-chrome-192x192.ico'));
app.use(favicon(__dirname + '/favicon/android-chrome-512x512.ico'));
app.use(favicon(__dirname + '/favicon/apple-touch-icon.ico'));
app.use(favicon(__dirname + '/favicon/favicon-16x16.ico'));
app.use(favicon(__dirname + '/favicon/favicon-32x32.ico'));

app.use('/',require("./routes/send"));



app.listen(port, () => {

  console.log(`Example app listening on port http://localhost:${port}`)
})