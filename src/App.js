import React from 'react';
import Checkbox from './Form/Checkbox';
import Quest from './questComponents/Quest';
import Position from './questComponents/Position';
import Options from './questComponents/Options';

import Score from './questComponents/Score';
const App = () => {
  const cores = ['tomato', 'aqua', 'lime'];

  const alignCenterStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '400px',
    height: '80vh',
    margin: '0 auto',
    textAlign: 'center',
    fontFamily: 'sans-serif !importat',
  };
  const form = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '400px',
    height: '80vh',
    margin: '0 auto',
    textAlign: 'center',
    fontFamily: 'sans-serif !importat',
  };
  const acertosStyle = {
    border: '1px solid transparent',
    borderBottom: '3px solid green',
    margin: '5px auto',
    padding: '20px',
    borderRadius: '8px',
    color: 'green',
    backgroundColor: 'lime',
    fontWeight: '700',
    width: '300px',
  };
  const [perguntaAtual, setPerguntaAtual] = React.useState(0);
  const [perguntaValue, setPerguntaValue] = React.useState([]);
  const [mostrarResultado, setMostrarResultado] = React.useState(false);
  const perguntas = [
    {
      pergunta: 'Qual método é utilizado para criar componentes?',
      options: [
        'React.makeComponent()',
        'React.createComponent()',
        'React.createElement()',
      ],
      resposta: 'React.createElement()',
      id: 'p1',
    },
    {
      pergunta: 'Como importamos um componente externo?',
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      resposta: 'import Component from "./Component"',
      id: 'p2',
    },
    {
      pergunta: 'Qual hook não é nativo?',
      options: ['useEffect()', 'useFetch()', 'useCallback()'],
      resposta: 'useFetch()',
      id: 'p3',
    },
    {
      pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
      options: ['set', 'get', 'use'],
      resposta: 'use',
      id: 'p4',
    },
  ];

  const [acertos, setAcertos] = React.useState([]);

  function handleClick(event) {
    event.preventDefault();

    if (perguntaAtual < perguntas.length) setPerguntaAtual(perguntaAtual + 1);

    setPerguntaValue([...perguntaValue, event.target.value]);
  }

  function reiniciar() {
    setPerguntaAtual(0);
    setPerguntaValue([]);
    setMostrarResultado(false);
    setAcertos([]);
  }

  React.useEffect(() => {
    perguntaValue.map((respostaUsuario) => {
      perguntas.forEach(({ resposta }) => {
        if (resposta == respostaUsuario) {
          if (!acertos.includes(respostaUsuario)) {
            setAcertos([...acertos, respostaUsuario]);
          }
        }
      });
    });
  }, [perguntaValue]);
  return (
    <>
      {!mostrarResultado && perguntaAtual < perguntas.length ? (
        <>
          <form style={form}>
            <Quest perguntas={perguntas} perguntaAtual={perguntaAtual} />
            <Options
              handleClick={handleClick}
              cores={cores}
              perguntas={perguntas}
              perguntaAtual={perguntaAtual}
            />
            <Position perguntas={perguntas} perguntaAtual={perguntaAtual} />
          </form>
          <footer style={{ textAlign: 'center', color: '#ccc' }}>
            <p> Criado por Wellington Santiago </p>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/wellington-santiago-161201201/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BU8bIlIDgRoKcUDXPThs1dQ%3D%3D"
            >
              linkedim
            </a>
            <br />
            <a target="_blank" href="https://github.com/dshzr/">
              github
            </a>
          </footer>
        </>
      ) : (
        <Score
          alignCenterStyle={alignCenterStyle}
          acertos={acertos}
          perguntas={perguntas}
          reiniciar={reiniciar}
          acertosStyle={acertosStyle}
        />
      )}
    </>
  );
};

export default App;
