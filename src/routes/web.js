import express from 'express';
import HomeControler from '../controllers/HomeControler';
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', HomeControler.getHomePage)

    router.get('/about', HomeControler.getAboutPage)
    router.get('/crud', HomeControler.getCRUDPage)
    
    router.post('/post-crud', HomeControler.postCRUDPage)
    router.get('/get-crud', HomeControler.displayGetCRUD)

    return app.use('/', router)
}

module.exports = initWebRoutes;