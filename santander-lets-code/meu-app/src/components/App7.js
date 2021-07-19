import React, { useState, useEffect } from 'react';

export default function App() {
  const [nome, setNome] = useState(undefined);

  useEffect(  // monitora variacao de info
    () => {
      if (nome === undefined) {
        setNome(sessionStorage.getItem('nome') || '');
      } else {
        sessionStorage.setItem('nome', nome);
      }
    }, 
    [nome]
  );

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