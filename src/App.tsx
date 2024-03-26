import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchNews } from './store/reducers/ActionCreators';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { MainPage } from './pages/Main';
import { Route, Routes } from 'react-router-dom';
import { NewsPage } from './pages/News/NewsPage';
import { routes } from './routes';

function App() {
  // const dispatch = useAppDispatch()
  // const {news, isLoading, error} = useAppSelector(state => state.newsReducer)

  // useEffect(() => {
  //   dispatch(fetchNews())
  // }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/news" element={<NewsPage />} />
        {/* <NewsPage />
        <MainPage /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
