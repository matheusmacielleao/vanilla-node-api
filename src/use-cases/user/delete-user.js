const deleteUser = async ({ userRepo, cpf }) => {

    const userExists = await userRepo.getByCPF(cpf)

    if (!userExists) {
        throw new Error(`Erro ao deletar, usuário com o ${cpf} não existe`)
    }

    await userRepo.delete(cpf)

}

module.exports = deleteUser;