import React, { useState } from 'react';

export default function App() {
  const [nome, setNome] = useState('');
  // const onClick = () => {
  //   setNome({ nome: 'Lucas' });
  // };

  return (
    <>
      Nome: <input type="text" 
              value={nome}
              onChange={
                (event) => setNome(event.target.value)
              }
            />
            <br/>
            Olá {nome}!
    </>
  );
}