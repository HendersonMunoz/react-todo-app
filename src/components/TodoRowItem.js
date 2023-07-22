function TodoRowItem(props){
    return(
        // if any of the table items are clicked by the user, they'll be deleted
        <tr onClick={() => props.deleteTodo(props.rowNumber)}>
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    )
}

export default TodoRowItem