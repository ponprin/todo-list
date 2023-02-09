import React, {Component} from "react";
import ReactDOM from "react-dom/client";
const a = (props) => {
    const searchText = 'Type your text here';
    const searchStyle = {
        fontSize: '20px'
    };

//state= {message:''}
    return <input type={""}
                  placeholder={searchText}
                  style={searchStyle}
                  disabled={false}
                  onKeyPress={(e) => {
                      if (e.key === "Enter") {
                         // this.setState({ message: e.target.value },
                         //     () => {
                         //         alert(this.state.message);
                         //     });
                          props.parentCallback(e.target.value);
                      }
                  }}
    />
};

export default a;
