import express from 'express';
import HomeControler from '../controllers/HomeControler';
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', HomeControler.getHomePage)

    router.get('/about', HomeControler.getAboutPage)
    

    return app.use('/', router)
}

module.exports = initWebRoutes;