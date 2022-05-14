const User = require("./../../App/models/User")


class UserService {
    static create(id, username, name) {
        return new User(id, username, name, "Sin bio")
    }
    static getInfo(user) {
        const listUser = []
        listUser.push(1, "LizethDamian", "Liz", "Sin bio")
        return listUser

    }
    static updateUserUsername(user, newuser) {
        user.username = newuser
        return user.username
    }

    static getAllUsernames([user1, user2, user3]) {
        const username = []
        username.push(user1.username, user2.username, user3.username)
        return username
    }
}

module.exports = UserService