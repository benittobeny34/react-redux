import React, {Component} from 'react';

class AddTodo extends Component {
    state = {
        title:'',
        id:null
    }
    handleChange = (e) => {
        this.setState({
            title:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            title:''
        })
    }
    
    render(){
        return(
         <div>
            <form onSubmit = {this.handleSubmit}>
                <div className="input-field">
                    <label>Add new title here!</label>
                    <input type='text' value={this.state.title} onChange={this.handleChange}/>
                </div>
                    <div className="input-field right">
                   <button type="submit" className="btn waves-effect waves-dark">Add</button>
                </div>
            </form>
        </div>
        )
    }
}

export default  AddTodo;