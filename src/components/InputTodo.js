import React, { Component } from "react";

class InputTodo extends Component {
    state = {
        title: ""
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
/* For Handling React form that has more than one text input do that:
onChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
};
and add a 'name' attribute to each of the input tags & assign it 
a value of the state property name. For this we have: name="title" 
*/

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodoProps(this.state.title);
        this.setState({
            title: ""
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Add Todo..." 
                    value={this.state.title}
                    name="title"
                    onChange={this.onChange} 
                />
                <button>Submit</button>
            </form>
        )
    }
}

export default InputTodo;