import logo from "./logo.svg";
import "./App.css";
import React, {Component} from "react";
import List from "./components/list";
import Index from "./components/Index";
import Search from "./components/search";
import ItemStatusFilter from "./components/itemStatusFilter";

class App extends Component {
    state = { message: "" }
    callbackFunction = (childData) => {
        this.setState({message: childData})
    }

    render() {
        const value = '<script>alert("")</script>'
        //const todo=['Install React Project', 'Step 1 Create React Project', 'Use React Project']
        const todo = [
            {label: 'Install React Project', important: false, id: 1},
            {label: 'Step 1 Create React Project', important: true, id: 2},
            {label: 'Use React Project', important: false, id: 3},
            {label:this.state.message, important: true,id:4}
        ];
        todo.push(this.state.message);
        return (
            <div className="App">
                {value}
                <Index/>
                <div>
                    <Search parentCallback = {this.callbackFunction} />
                    <ItemStatusFilter/>
                </div>
                <List todoData={todo}/>
            </div>
        );
    }
}

export default App;
