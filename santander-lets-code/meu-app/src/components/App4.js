import { render } from '@testing-library/react';
import React from 'react';

class App4 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      nome: undefined,
      txtNome: ''
    };
  }

  changeTxtName = (event) => {
    // funcao anonima nao tem 'this' proprio, nao precisa de 'bind'
    this.setState({txtNome: event.target.value}) // so' precisa mandar o que vai ser alterado
  }

  persistName = () => {
    this.setState({nome: this.state.txtNome})
  }

  render(){
    const renderForm = () => {
      return (
        <>
          Nome: <input type='text' onChange={this.changeTxtName} />
          <button onClick={this.persistName}>Salvar</button>
        </>
      )
    };

    const renderTxt = () => (
          <p>olá {this.state.nome}</p>
      );

    return !this.state.nome ? renderForm() : renderTxt();

  }
}

export default App4;
