import React from 'react'

export const ShowTask = ({tasklist,setTasklist,task,setTask}) => {

    const handleEdit = (id) => {
        const selectedTask = tasklist.find(todo => todo.id === id);
        // console.log(selectedTask) ; 
        setTask(selectedTask) ; 
    }
     
    const handleDelete = (id) => {
        const updatedTaskList = tasklist.filter(todo => todo.id !== id);
        setTasklist(updatedTaskList) ; 
    }

    


  return (
    <section className="showTask">
        <div className="head">
            <div>
                <span className="title">Todo</span>
                <span className="count">{tasklist.length}</span>    
            </div>            
            <button onClick={() => setTasklist([])} className="clearAll" >Clear All</button>
        </div>
        <ul>
            {tasklist.map((todo) => (
                <li key={todo.id}>
                <p>
                    <span className='name'>{todo.name}</span>
                    <span className='time'>{todo.time}</span>
                </p>
                <i className='bi bi-pencil-square' onClick={() => handleEdit(todo.id)}></i>
                <i className='bi bi-trash' onClick={() => handleDelete(todo.id)}></i>
            </li>

            ))}
            
        </ul>
    </section>
  )
}
