const User = require("./../../App/models/User")

describe('Unit Test for User class', () => {

    test('Create a User object', () => {
        const user1 = new User(1, "LizethDamian", "Liz", "Bio")

        expect(user1.id).toBe(1)
        expect(user1.username).toBe("LizethDamian")
        expect(user1.name).toBe("Liz")
        expect(user1.Bio).toBe("Bio")
        expect(user1.dateCreated).not.toBeUndefined()
        expect(user1.LastUpdated).not.toBeUndefined()

    });
    test('Add getters', () => {
        const user1 = new User(1, "LizethDamian", "Liz", "Bio")

        expect(user1.getusername).toBe("LizethDamian")
        expect(user1.getBio).toBe("Bio")
        expect(user1.getdateCreated).not.toBeUndefined()
        expect(user1.getLastUpdated).not.toBeUndefined()

    });
    test('Add setters', () => {
        const user1 = new User(1, "LizethDamian", "Liz", "Bio")

        user1.setusername = "LizethDamian"
        expect(user1.username).toBe("LizethDamian")

        user1.setBio = "New Bio"
        expect(user1.Bio).toBe("New Bio")


    });


});