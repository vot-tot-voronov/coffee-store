class User {
    constructor(id, name, country, price) {
        this.id = id,
        this.name = name,
        this.country = country,
        this.price = price
    }

    getUser() {
        return {
            id: this.id,
            name: this.name,
            country: this.age,
            price: this.city
        }
    }
    
}

module.exports = User