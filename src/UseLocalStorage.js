import React from 'react';

const UseLocalStorage = (chave, inicial) => {
  const [dados, setDados] = React.useState(() => {
    const local = window.localStorage.getItem(chave);

    return local ? local : inicial;
  });

  React.useEffect(() => {
    window.localStorage.setItem(chave, dados)
  }, [dados]);

  return [dados, setDados];
};

export default UseLocalStorage;
