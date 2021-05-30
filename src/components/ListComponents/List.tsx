import {ListItem} from "./ListItem/ListItem";

import {useSelector} from "react-redux";

type todoListType = {
    todo: string,
    id: string
}[];

export const List = () => {
    const todoList = useSelector((store: todoListType) => store);
    console.log(todoList)

    return (
        <ul>
            {
                todoList.map(item => <ListItem todo={item.todo} key={item.id} />)
            }
        </ul>
    );
}