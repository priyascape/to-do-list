import React from 'react';

const Input = (props) => {
    const {list, setList} = props;
        let task = {
            name: "",
            isComplete: false
        };
    const onChange = (e) =>{
        task.name = e.target.value;
    }
    const onClick = (e) =>{
        setList([...list, task])
        e.target.value = ""
    }
    return (
        <div className="container w-50 mt-5">
            <input onChange={onChange} className="form-control"  type="text" name="task"/>
            <button className="btn btn-primary btn-block mt-1" onClick={onClick}>Add Task</button>
        </div>
    )

}

export default Input;