import React from 'react';

class App3 extends React.Component{
  constructor(props){
    super(props);
    this.state = {nome: '', idade: 26};
  }

  changeName = (event) => {
    // funcao anonima nao tem 'this' proprio, nao precisa de 'bind'
    this.setState({nome: event.target.value}) // so' precisa mandar o que vai ser alterado
  }

  render(){
    return (
      <>
        Nome: <input type="text" value={this.state.nome} onChange={this.changeName}></input>
        <p>olá {this.state.nome}</p>
      </>
    );
  }
}

export default App3;
