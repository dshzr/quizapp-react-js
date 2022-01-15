import React from 'react';

const Quest = ({ perguntas, perguntaAtual }) => {
  return <div style={{}}>{<h3>{perguntas[perguntaAtual].pergunta}</h3>}</div>;
};

export default Quest;
