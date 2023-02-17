const getUsers = async ({ userRepo, payload }) => {
    return await userRepo.get(payload)
}

module.exports = getUsers;