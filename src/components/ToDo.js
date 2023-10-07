import React from 'react';
import { FiEdit } from 'react-icons/fi'
import { AiFillDelete } from 'react-icons/ai'


const ToDo = ({text, updateMode, deleteToDo}) => {
    return (
        <div className='todo'>
            <div className='text'>{text}</div>
            <div className='icons'>
                <FiEdit className='icon' onClick={updateMode} />
                <AiFillDelete className='icon' onClick={deleteToDo} />
            </div>
        </div>
    )
}

export default ToDo