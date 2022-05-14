const UserService = require("./../../App/Services/UserService")

describe('Tests for UserService', () => {

    test('1. Create a new User using the UserService', () => {
        const User = UserService.create(1, "LizethDamian", "Liz")

        expect(User.id).toBe(1)
        expect(User.username).toBe("LizethDamian")
        expect(User.name).toBe("Liz")
        expect(User.Bio).not.toBeUndefined()

    });
    test('2. Get all user data in a list', () => {
        const User = UserService.create(1, "LizethDamian", "Liz")
        const userInfoInList = UserService.getInfo(User)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("LizethDamian")
        expect(userInfoInList[2]).toBe("Liz")
        expect(userInfoInList[3]).toBe("Sin bio")

    });
    test('3. Update username', () => {
        const User = UserService.create(1, "LizethDamian", "Liz")
        UserService.updateUserUsername(User, "lizdam")
        expect(User.username).toBe("lizdam")

    })
    test('4. Given a list of users give me the list of usernames', () => {
        const user1 = UserService.create(1, "LizethDamian", "Liz")
        const user2 = UserService.create(2, "AbigailElizondo", "Abi")
        const user3 = UserService.create(3, "DanaGon", "Dana")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("LizethDamian")
        expect(usernames).toContain("AbigailElizondo")
        expect(usernames).toContain("DanaGon")

    })

});