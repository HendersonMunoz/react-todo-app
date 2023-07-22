import React, {useState} from 'react';

//creating the form below, to allow the user the enter todo items.
function NewTodoForm(props) {

    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    const submitTodo = () => {
        if (description !== '' && assigned !==''){
            props.addTodo(description, assigned);
            //after the form is submited, the line below will clear the data fields
            setDescription('');
            setAssigned('');
        }
    }

    return(
        <div className = 'mt-5'>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>Assigned</label>
                    <input 
                    type='text' 
                    className='form-control' 
                    required
                    // adding an onChange listener - > onChange, the app will grab the event
                    // and set the assinee based on the aero function of e.targets.value
                    onChange={e => setAssigned(e.target.value)}
                    //adding a value to be displayed on the form
                    value={assigned}
                    ></input>
                </div>
                <div className = 'mb-3'>
                    <label className='form-label'>Description</label>
                    <textarea 
                    className='form-control' 
                    rows={3} 
                    required
                    // adding an onChange listener - > onChange, the app will grab the event
                    // and set the description based on the aero function of e.target.value
                    onChange={e => setDescription(e.target.value)}
                    //adding a value to be displayed on the form
                    value={description}
                    ></textarea>
                </div>
                <button 
                type='button' 
                className='btn btn-primary mt-3'
                onClick={submitTodo}
                >
                    Add Todo
                </button>
            </form>
        </div>
    )
}

export default NewTodoForm