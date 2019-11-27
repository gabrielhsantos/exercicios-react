import React from 'react';
import ReactDOM from 'react-dom';
import PrimeiroComponente from './componentes/PrimeiroComponente';

//selecionando a div com id == root dentro do body
const elemento = document.getElementById('root');

// const jsx = <h1>Olá React</h1>;
//chamando a função para renderizar o conteúdo na página
//ReactDOM.render(jsx, elemento); // Texto || tag(precisa do import do react) + elemento

ReactDOM.render(
  <div>
    <PrimeiroComponente /> {/* Forma de chamar o componente (e de comentar) */}
  </div>
  , elemento);