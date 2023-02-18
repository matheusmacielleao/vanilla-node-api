const updateUser = async ({ userRepo, cpf, payload }) => {

    const userExists = await userRepo.getByCPF(cpf)

    if (!userExists) {
        throw new Error(`Erro ao atualizar, usuário com o ${cpf} não existe`)
    }

    const updatedUser = await userRepo.update(cpf, payload)

    return updatedUser
}

module.exports = updateUser;