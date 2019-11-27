import React from 'react';

export default props => [
  <h1>Parte 1</h1>,
  <h2>Parte 2</h2>
]

  //solução 01 mais usada
  // export default props =>
  // <div>
  //   <h1>Parte 1</h1>
  //   <h2>Parte 2</h2>
  // </div>

  //solução 02 fragmentar sem div
  // export default props =>
  // <React.Fragment>
  // <h1>Parte 1</h1>
  // <h2>Parte 2</h2>
  // </React.Fragment>

  //solução 03 com array
  // export default props => [
  //   <h1>Parte 1</h1>,
  //   <h2>Parte 2</h2>
  // ]