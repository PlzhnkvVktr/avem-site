import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchNews } from './store/reducers/ActionCreators';

function App() {
  const dispatch = useAppDispatch()
  const {news, isLoading, error} = useAppSelector(state => state.newsReducer)

  useEffect(() => {
    dispatch(fetchNews())
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>sdfsdfsdfsdf</p>
      </header>
      {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(news, null, 2)}
    </div>
  );
}

export default App;
