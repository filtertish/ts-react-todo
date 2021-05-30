import {InputField, Button} from "../styles/controlPanel.styles";

import {useState, ChangeEvent, KeyboardEvent} from "react";
import {useFocus} from "../hooks/useFocus";

import {useDispatch} from "react-redux";

import {addTodo} from "../actions/todoActions";

const _ = require('lodash');


export const ControlPanel = () => {
    const [todoText, updateTodoText] = useState<string>('');
    const dispatch = useDispatch();
    const inputRef = useFocus();

    const inputHandler = (event:ChangeEvent<HTMLInputElement>) => {
        updateTodoText(event.target.value);
    }

    const buttonHandler = () => {
        if (todoText) {
            dispatch(addTodo(todoText, _.uniqueId('todo_')));
            updateTodoText('');
        }
    }

    const onKeyPressInputHandler = (event:KeyboardEvent<HTMLInputElement>) => {
        if (todoText && event.key === 'Enter') {
            dispatch(addTodo(todoText, _.uniqueId('todo_')));
            updateTodoText('');
        }
    }

    return(
        <div>
            <InputField ref={inputRef} onChange={inputHandler} value={todoText} onKeyPress={onKeyPressInputHandler}/>
            <Button onClick={() => buttonHandler()} >Add</Button>
        </div>
    );
}