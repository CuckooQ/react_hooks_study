import { useEffect, useState } from 'react';
import './App.css';
import defaultAxios from 'axios';

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });

  const [trigger, setTrigger] = useState(0);

  const refetch = () => {
    setState({
      ...state,
      loading: true
    });
    setTrigger(Date.now());
  }

  useEffect(()=>{
    axiosInstance(opts).then(data => {
      setState({
        ...state,
        loading: false,
        data
      });
    }).catch(error => {
      setState({
        ...state,
        loading: false,
        error
      });
    });
    console.log(state.loading, state.data, state.error);
  }, [trigger]);

  return {...state, refetch};
}

const App = () => {
  const {loading, data, refetch} = useAxios({url: "https://yts.am/api/v2/list_movies.json"});
  
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
}

export default App;
