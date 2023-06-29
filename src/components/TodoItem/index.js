// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }
  return (
    <li className="list-item">
      <p className="text">{title}</p>
      <button className="delete-button" type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
