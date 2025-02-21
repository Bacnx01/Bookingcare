import db from '../models/index'
import CRUDService from '../services/CRUDService'
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll()
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        })
    } catch (error) {
        console.log(error);
    }

}

let getCRUDPage = async (req, res) => {
    return res.render('crud.ejs')
}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs')
}

let postCRUDPage = async(req, res) => {
    let message = await CRUDService.createNewUser(req.body)
    console.log(message);
    return res.send('post CRUD Page')
}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUDPage: getCRUDPage,
    postCRUDPage: postCRUDPage
}