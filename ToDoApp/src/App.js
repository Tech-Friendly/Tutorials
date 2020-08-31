import React from "react";
import "./main.css";

class App extends React.Component{
    constructor() {
        super();
        this.state={
            input: '',
            list: []
        }
    }

    addToList = e=>{
        const {keyCode, key} = e;
        if(keyCode == 13) {
            this.setState(s=>({
                input: '',
                list: s.list.concat(s.input)
            }))
        }
        else if( keyCode == 8) {
            this.setState(s=>({
                input: s.input.substring(0, s.input.length-1)
            }))
        }else if(/^[a-z\s0-9!-=]$/gi.test(key)){
            this.setState(s=>({
                input: s.input + key
            }))
        }
    }

    render() {
        const listItems = this.state.list.map(el=>(
            <div className="list-item">{el}</div>
        ));
        return(
            <div className="container">
                <input type="text" placeholder="Add a item" onKeyDown={this.addToList} value={this.state.input}></input>
                <div className="list">
                    {listItems}
                </div>
            </div>
        )
    }
}

export default App;