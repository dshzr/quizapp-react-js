import React from 'react';

const UseFetch = () => {
  const [data, setData] = React.useState(null);
  const [erro, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [sucesso, setSucesso] = React.useState(null);

  const post = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      setLoading(false);
      setSucesso(true)
    } catch (error) {
      json = null;
      setSucesso(false)
      setError('Algo deu errado...');
      
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  return { data, erro, loading, post, sucesso };
};

export default UseFetch;
