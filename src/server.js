import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/ViewEngine';
import initWebRoutes from './routes/web';
require('dotenv').config();

let app = express();

// config

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app)
initWebRoutes(app)

let port = process.env.PORT || 6969;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
    console.log(`Server is running on port 1 ${port}`)
})