import React from 'react';
import  UniqueId from '../../util/id_generator'

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            done: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    updateTodo(word){
        return e =>this.setState({[word]: e.currentTarget.value} );
    }

    handleSubmit(e) {
        e.preventDefault();
        const todo = Object.assign({}, this.state, { id: UniqueId() });
        this.props.receiveTodo(todo);
        
        this.setState({
          title: "",
          body: ""
        }); 
      }
    

    render(){
        return(
            <div>
              <form onSubmit={this.handleSubmit}>
                  <label>Title: 
                  <input value={this.state.title} onChange={this.updateTodo('title')} required/>
                  </label> 

                  <label>Body: 
                      <input value={this.state.body} onChange={this.updateTodo('body')} required/>
                  </label>
                  <button>done</button>
              </form>

            </div>
        )
    }

}
export default TodoForm;