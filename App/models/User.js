class User {

    constructor(id, username, name, Bio) {
        this.id = id
        this.username = username
        this.name = name
        this.Bio = Bio
        this.dateCreated = new Date()
        this.LastUpdated = new Date()
    }
    get getusername() {
        return this.username
    }

    get getBio() {
        return this.Bio
    }
    get getdateCreated() {
        return this.dateCreated
    }
    get getLastUpdated() {
        return this.LastUpdated
    }
    set setusername(newusername) {
        this.username = newusername
    }
    set setBio(newBio) {
        this.Bio = newBio
    }
}

module.exports = User