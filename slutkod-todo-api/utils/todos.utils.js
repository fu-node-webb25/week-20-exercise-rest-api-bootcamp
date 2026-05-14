export const createTodo = (todo) => {
    return {
        id : crypto.randomUUID().substring(0, 5),
        todo,
        completed : false
    }
}