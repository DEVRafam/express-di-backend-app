const { response } = require("express");
const env = require("../helpers/env");

class UserController {
    /**
     * @param {UserRepository} UserRepository
     */
    constructor(UserRepository) {
        this.UserRepository = UserRepository;
    }
    //
    test() {
        console.log("test");
    }
    //
    async getAll(req, res) {
        const users = await this.UserRepository.findAll({
            attributes: { exclude: ["password", "token"] },
            order: [["id", "DESC"]],
        });
        res.send(users);
    }
    //
    async getSingle(req, res) {
        const user = await this.UserRepository.findById(req.params.id, { attributes: { exclude: ["password"] } });
        return user ? res.send(user) : res.sendStatus(404);
    }
    //
    async createWithParams(req, res) {
        //data has been already validated by suitable middleware
        const { name, surname, email, password } = req.body;
        //create new user and return him
        const freshUser = await this.UserRepository.create({ name, surname, email, password });
        //exclude password from fresh user
        const { password: _, ...userToReturn } = freshUser;
        return res.send(userToReturn);
    }
    //
    async deleteSingleUser(req, res) {
        let status = 500;
        const id = req.params.id * 1;
        //
        status = await this.UserRepository.findAndDestroyById(id);
        return res.sendStatus(status);
    }
    //
    async updateSingleUser(req, res) {
        const id = req.params.id * 1;
        //
        response = await this.UserRepository.findAndUpdate(id, req.body);
        if (typeof response === "number") return res.sendStatus(response);
        else res.send(response);
    }
}
module.exports = UserController;
