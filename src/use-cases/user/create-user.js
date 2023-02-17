const createUser = async ({ userRepo, payload }) => {

    const { cpf, name, birthDate } = payload

    const user = {
        cpf,
        name,
        birthDate
    }

    const userExists = await userRepo.getByCPF(cpf)

    if (userExists) {
        throw new Error(`Usuário com o CPF ${cpf} já cadastrado`)
    }

    await userRepo.create(user)

    return user
}

module.exports = createUser;