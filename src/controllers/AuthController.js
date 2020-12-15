const jwt = require("jsonwebtoken");
const UserRepository = require("../repositories/UserRepository");
//
class AuthController {
    /**
     * @param {UserRepository} UserRepository
     */
    constructor(UserRepository) {
        this.UserRepository = UserRepository;
    }
    //
    login() {
        //valid email and password
    }
    /**
     * @api {post}
     * @apiName PostAuthRegister
     * @apiGroup Auth
     * @apiVersion 1.0.0
     *
     * @apiParam name {String} User name
     * @apiParam email {String} User email
     * @apiParam surname {String} User surname
     * @apiParam password {String} User password
     * @apiParam password_repeat {String} Password confirmation
     *
     * @apiRequestExample {json}:
     * {
     *
     * }
     *
     */
    async register(req, res) {
        console.log(req.body);
        const user = jwt.decode;
        return res.send(200);
        //create model
        //return tokens
    }
    //
    checkToken() {
        //check if token has expired
        //if false retrun 403
        //else if
        //verify access and refresh token
        //if they're ok then refresh access token and return him, otherwise throw en error
    }
}
module.exports = AuthController;
