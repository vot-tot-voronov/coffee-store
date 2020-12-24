class User {
    constructor(name, age, city) {
        this.name = name,
        this.age = age,
        this.city = city
    }

    getUser() {
        return {
            name: this.name,
            age: this.age,
            city: this.city
        }
    }
    
}

module.exports = User