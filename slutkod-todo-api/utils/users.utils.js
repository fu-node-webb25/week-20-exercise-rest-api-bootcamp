export const createUser = (user) => {
    return {
        userId : crypto.randomUUID().substring(0, 5),
        ...user
    }
}