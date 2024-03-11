import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchNews } from './store/reducers/ActionCreators';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

function App() {
  const dispatch = useAppDispatch()
  const {news, isLoading, error} = useAppSelector(state => state.newsReducer)

  useEffect(() => {
    dispatch(fetchNews())
  }, [])

  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
