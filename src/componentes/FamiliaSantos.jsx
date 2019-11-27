import React from 'react';
import Membro from './Membro';

export default props =>
  <div>
    <Membro nome="Thomas" sobrenome={props.sobrenome}/>
    <Membro nome="Ana" sobrenome="Sá"/>
    <Membro nome="Gabriel" sobrenome={props.sobrenome}/>
  </div>
