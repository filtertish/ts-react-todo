const defaultState = [
    {
        todo: 'Make todo list',
        id: 'hardcoded_todo_0'
    },
    {
        todo: 'Learn typescript',
        id: 'hardcoded_todo_1'
    }
];

type todoState = {
    todo: string,
    id: string
}[];

type payloadState = {
    todoText: string,
    todoId: string
}

type Action = {
    type: 'ADD_TODO',
    payload: payloadState
}

export const todoReducer = (state: todoState = defaultState, action: Action) => {
    switch (action.type) {
        case ('ADD_TODO'):
            return [...state, {todo: action.payload.todoText, id: action.payload.todoId}];
        default:
            return state;
    }
}