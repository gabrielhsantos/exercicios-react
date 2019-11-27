import React from 'react';

// function primeiro() {
//   return <h1>Primeiro Componente!</h1>
// };

// export default primeiro;

// export default () => <h1>Primeiro Componente!</h1>; // como função anônima + arrow function

export default props =>
  <div>
    <h1>{props.valor}</h1> {/* Forma de passar um valor pra ser renderizado */}
    <h1>{props.AbCd}</h1>
    <h1>{props.calc}</h1>
    <h1>{props.math}</h1>
    <h1>{props.txt}</h1>
  </div>