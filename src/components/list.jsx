import React from "react";

const list = (props) => {
    //const items = ['Install React Project', 'Step 1 Create React Project', 'Use React Project']

    return (
        <ul>
            {props.todoData.map(function (item) {
                return <li key={item.id}>{item.label}</li>
            })}
            <li>{props.todoData.length}</li>
        </ul>
    );
};

export default list;
