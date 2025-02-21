import bcrypt from 'bcryptjs';
import db from '../models/index'
import { where } from 'sequelize';
const salt = bcrypt.genSaltSync(10);
// Thêm dữ liệu
let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password)
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId,
                positionId: data.positionId,
                image: data.image,
                phoneNumber: data.phoneNumber
            })

            resolve('ok created successfully')
        } catch (error) {
            reject(error);
        }
    })
}
// hasd password
let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            const hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (error) {
            reject(error);
        }
    })
}
// gọi tất cả dữ liệu
let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = db.User.findAll({ raw: true });
            resolve(users);
        } catch (error) {
            reject(error);
        }
    })
}
// lấy dữ liệu theo id
let getUserInfoById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId },
                raw: true,
            });
            if (user) {
                resolve(user);
            } else {
                resolve({})
            }
        } catch (error) {
            reject(error);
        }
    })
}
// 
let updateUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: data.id }
            });
            if(user){
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;

                await user.save();

                let allUsers = await db.User.findAll();
                resolve(allUsers);
            }else{
                resolve('User not found');
            }
        } catch (error) {
            console.log(error);
        }
    })
}
module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getUserInfoById: getUserInfoById,
    updateUserData: updateUserData
}