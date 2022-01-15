import React from 'react'

const Position = ({perguntas, perguntaAtual}) => {

  return (
    <div style={{
      width: '100%',
      backgroundColor: 'grey',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '50px',
      color:'white',
      borderBottom: '4px solid #aaa',
      borderRadius: '4px'
    }}>
      <h4>pergunta ({perguntaAtual +1}/{perguntas.length})</h4>
    </div>
  )
}

export default Position
