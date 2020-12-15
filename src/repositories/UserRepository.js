const AbstractRepository = require("./AbstractRepository");
//
class UserRepository extends AbstractRepository {
    get model() {
        const { User } = this.db;
        return User;
    }
    //
}
module.exports = UserRepository;
