import React, { useEffect, useState ,useRef} from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types'
import './Task.css'

function Task({ task, onToggleCompleted,onDeleteTask,editId,onStartEdit,onUpdateTask }) {
  const { description, completed, createdAt ,id} = task;

  const isEdit=editId === id;
  const [editValue, setEditValue] = useState(description)
  const inputRef=useRef(null);

  useEffect(()=>{
    if(isEdit){
      inputRef.current.focus()
    }
  },[isEdit])

  const handleEditChange=(e)=>{
    setEditValue(e.target.value)
  }

  const handleEditSubmit=(e)=>{
if(e.key==="Enter"){
  onUpdateTask(id, editValue)
}
}

  return (
    <>
   
 <li className={`${completed ? 'completed' : ''} ${isEdit ? 'editing': ''}`}>
      <div className="view">
        <input
          className="toggle"

          type="checkbox"
          checked={completed}
          readOnly
          onChange={onToggleCompleted} 
        
        />
        <label>
          <span className="description">{description}</span>
          <span className="created">
            created {formatDistanceToNow(createdAt, { addSuffix: true })}
          </span>
        </label>

           
          <button className="icon icon-edit"
          onClick={onStartEdit}
          ></button>

          <button className="icon icon-destroy"
            onClick={onDeleteTask}>
          </button>

        </div>

        {isEdit && <input 
        type='text' 
        className='edit' 
        value={editValue}
        onKeyDown={handleEditSubmit}
        onChange={handleEditChange}
        ref={inputRef}/>}
      </li>
    </>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
  id: PropTypes.number.isRequired,
  description:PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  createdAt:PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  editId: PropTypes.number,
  onStartEdit: PropTypes.func.isRequired,
  onUpdateTask: PropTypes.func.isRequired ,
}



export default Task;