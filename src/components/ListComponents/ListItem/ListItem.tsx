import {ListItemP} from "../../../styles/list.styles";

interface ListItemProps {
    todo: string,
    key: string,
}

export const ListItem = ({todo}: ListItemProps) => <ListItemP>{todo}</ListItemP>