import React from "react";
import "./Template.css";

const Template = ({children, todoLength}) => {
    return (
        <div className="Template">
            <div className="title1">Todolist</div>
            <div className="title2">할 일 {todoLength}개 남음</div>
            <div>{children}</div>
        </div>
    );
};

export default Template;