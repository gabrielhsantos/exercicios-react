import React from 'react';
import ReactDOM from 'react-dom';
import PrimeiroComponente from './componentes/PrimeiroComponente';

//selecionando a div com id == root dentro do body
const elemento = document.getElementById('root');

// const jsx = <h1>Olá React</h1>;
//chamando a função para renderizar o conteúdo na página
//ReactDOM.render(jsx, elemento); // Texto || tag(precisa do import do react) + elemento

let isLegal = true;
// let isLegal = false;

ReactDOM.render(
  <div>
    <PrimeiroComponente valor="Bom dia!" /> {/* Forma de chamar o componente (e de comentar) */}
    <PrimeiroComponente AbCd={123} /> {/* Outra forma de enviaro o valor a um componente */}
    <PrimeiroComponente calc={2**8} /> {/* 2 elevado a 8 */}
    <PrimeiroComponente math={Math.pow(2, 8)} /> {/* 2 elevado a 8 em função */}
    <PrimeiroComponente txt={isLegal ? 'Codar é legal' : 'Codar não é legal'} />
  </div>
  , elemento);