const fs = require('fs').promises;


class FSUserRepository {
    async create(user) {
        const allUsers = await this.get()
        allUsers.push(user)
        await fs.writeFile('./users.json', JSON.stringify(allUsers, null, 2))
        return user
    }

    async get(payload) {

        const users = await fs.readFile('./users.json')

        return JSON.parse(users)

    }

    async getByCPF(cpf) {
        const users = await this.get()

        const user = users.find(user => { return user.cpf === cpf })

        return user

    }

    async delete(cpf) {
        let users = await this.get()
        users = users.filter(user => user.cpf !== cpf)
        await fs.writeFile('./users.json', JSON.stringify(users, null, 2))
    }


}

module.exports = FSUserRepository