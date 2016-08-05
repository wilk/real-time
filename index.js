class Person {
    constructor(name) {
        this.name = name
    }

    hello() {
        console.log(`Hello I'm ${this.name}`)
    }

    init() {
        console.log('RT started')

        this.hello()
    }
}

module.exports = Person;