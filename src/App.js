// importing CSS and react depedencies. Also calling on sub/child components. 
import React, {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
//importing the todo form component
import NewTodoForm from './components/NewTodoForm';

function App() {

// conditional rendering for the Add Todo form. Setting the innitial state to false.
const [showAddTodoForm, setShowAddTodoForm] = useState(false);

// useState is a built in function of React. 
   const [todos, setTodos] = useState([
    {rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User One'},
    {rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'User two'},
    {rowNumber: 3, rowDescription: 'dinner', rowAssigned: 'User one'},
    {rowNumber: 4, rowDescription: 'Workout', rowAssigned: 'User one'}
  ])
  // add todo item functionality
  const addTodo = (description, assigned) => {
    let rowNumber = 0;
    if (todos.length > 0){
      rowNumber = todos[todos.length -1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
      const newTodo = {
        rowNumber: rowNumber,
        rowDescription: description,
        rowAssigned: assigned
        };
      // structuring/organazing the new todo in an array
      setTodos(todos => [...todos, newTodo])
  }

  //code block to delete Todo items - passes in a unique row number as the argument
  const deleteTodo = (deleteTodoRowNunmber) => {
    let filtered = todos.filter(function(value){
      return value.rowNumber !== deleteTodoRowNunmber;
    });
    setTodos(filtered);
  }

//CSS stylying below.
  return (
    <div className = 'mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          <button onClick= {() => setShowAddTodoForm(!showAddTodoForm)} className='btn btn-primary'>
            {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
            </button>
            {showAddTodoForm &&
            //conditional rendering of the add todo form. Lines above and below
            <NewTodoForm addTodo={addTodo}/>
            }
        </div>
      </div>
    </div>
  );
}

export default App;
