import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: '',
      list: ['Sacar la ropa', 'Hacer la cama', 'Leer un rato'],

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
      const list = event.target.name
      const value = event.target.value 
      
      this.setState({
        list: [...this.state.list, value]
    }) 
  
      
  }

  handleSubmit(event) {
    alert('hola ' + this.state.texto)
    event.preventDefault();
  }




  render() {
    const { list } = this.state
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo"> 
            {list.map((list) => <li>{list}</li>)}
          </ul>
           <form onSubmit={this.handleSubmit}>
             <input type ='text' id="new-task" value={this.value} name='list' onKeyDown={this.handleChange} placeholder="Ingresa una tarea y oprime Enter" />     
           </form>
        </div>
      </div>
    )
  }
}


export default App;
