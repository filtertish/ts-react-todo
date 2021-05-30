const addTodo = (text: string, id: string) => {
    return (
        {
            type: 'ADD_TODO',
            payload: {todoText: text, todoId: id}
        }
    )
}


export {addTodo}