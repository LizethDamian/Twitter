const UserView = require('./../../App/View/UserView')

describe('Test for UserView', () => {
    test("Return an error object when try to create a new user with an null payload", () => {
        const payload = null
        const result = UserView.CreateU(payload)
        expect(result.error).toMatch(/no existe/)
    })
});