import React from "react";

const itemStatusFilter = () => {
    const searchText = 'Type your text here';
    const searchStyle = {
        fontSize: '20px'
    };
    return (
        <div>
            <button>All</button>
            <button>Active list</button>
            <button>Done</button>
        </div>
    );
};

export default itemStatusFilter;