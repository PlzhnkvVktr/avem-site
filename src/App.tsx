import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchNews } from './store/reducers/ActionCreators';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Main } from './pages/Main';

function App() {
  const dispatch = useAppDispatch()
  const {news, isLoading, error} = useAppSelector(state => state.newsReducer)

  useEffect(() => {
    dispatch(fetchNews())
  }, [])

  return (
    <div className="App">
      {/* <Header /> */}
      <Main />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
