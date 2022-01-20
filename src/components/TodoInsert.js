import React from "react";
import { MdAddCircle } from "react-icons/md";
import { useEffect, useState } from "react/cjs/react.development";
import {TiTrash, TiPencil} from "react-icons/ti";
import "./TodoInsert.css"

const TodoInsert = ({onMemo, onUpdate, onRemove, onInsertToggle, onInsertTodo, selectedTodo}) => {
    const [value, setValue] = useState("");

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onInsertTodo(value);
        setValue("");
        onInsertToggle();
    };

    useEffect(() => {
        if(selectedTodo) {
            setValue(selectedTodo.text);
        }
    }, [selectedTodo]);

    return (
    <div>
        <div className="background" onClick={onInsertToggle}></div>
        <form onSubmit={selectedTodo ? () => {onUpdate(selectedTodo.id, value)} : onSubmit}>
            <input placeholder="please type"
            value={value}
            onChange={onChange}
            ></input>
            {selectedTodo ? (
                <div className="rewrite">
                    <TiPencil onClick={() => {onUpdate(selectedTodo.id, value)}}/>
                    <TiTrash onClick={() => {onRemove(selectedTodo.id)}}/>
                    <MdAddCircle onClick={() => {onMemo()}}/>
                </div>
            ): (<button type="submit">
                <MdAddCircle/>
            </button>)}
        </form>
    </div>
    );
};

export default TodoInsert;