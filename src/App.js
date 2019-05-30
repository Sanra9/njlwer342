import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: '',
      list: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
   if(event.key==='Enter'){
    const list = event.target.list
    const value = event.target.value
    this.setState({
      list: [...this.state.list,value]
  })
  event.preventDefault();
   }            
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    const { list } = this.state
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo"> 
            <li>Sacar la ropa</li>
            <li>Hacer la cama</li>
            <li>Leer un rato</li>
            {list.map((list) => <li>{list}</li>)}
          </ul>
           <form>
             <input type ='text' id="new-task" name='list' onKeyPress={this.handleChange} placeholder="Ingresa una tarea y oprime Enter" />     
           </form>
        </div>
      </div>
    )
  }
}


export default App;
