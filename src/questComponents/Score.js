import React from 'react';

const Score = ({
  alignCenterStyle,
  acertos,
  perguntas,
  reiniciar,
  acertosStyle,
}) => {
  return (
    <div style={alignCenterStyle}>
      <h1>Score</h1>
      <span>
        Você acertou {acertos.length}/{perguntas.length}
      </span>
      {acertos.map((acerto, index) => {
        return (
          <span key={index} style={acertosStyle}>
            {acerto}
          </span>
        );
      })}

      <button
        onClick={reiniciar}
        style={{
          color: 'white',
          backgroundColor: 'tomato',
          width: '300px',
          margin: '20px auto',
          borderBottom: '4px solid red',
          fontWeight: '700',
        }}
      >
        Reiniciar
      </button>
    </div>
  );
};

export default Score;
