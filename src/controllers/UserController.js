class UserController {
    /**
     * @param {UserRepository} userRepository
     */
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    //
    test() {
        console.log("test");
    }
}
module.exports = UserController;
