import React from 'react'

const Options = ({cores, perguntas, perguntaAtual, handleClick}) => {
  return (
    <div>
       {perguntas[perguntaAtual].options.map((option, index) => {
        return (
          <div key={index}>
            <button
              value={option}
              onClick={handleClick}
              style={{
                backgroundColor: cores[index],
                margin: '10px auto',
                fontWeight: 'bold',
                color: 'black',
                display: 'flex',
                width: '400px',
                textAlign: 'center',
                justifyContent: 'center',
              }}
            >
              {option}
            </button>
          </div>
        );
      })}
    </div>
  )
}

export default Options
