import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchNews, fetchProducts, fetchProductsByCategory } from './store/reducers/ActionCreators';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { MainPage } from './pages/Main';
import { Route, Routes } from 'react-router-dom';
import { NewsPage } from './pages/News/NewsPage';
import { ProductPage } from './pages/Product/ProductPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

function App() {
  const dispatch = useAppDispatch()
  const {products, isLoading, error} = useAppSelector(state => state.productReducer)

  useEffect(() => {
    dispatch(fetchProducts())
    console.log(products)
  }, [])

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/products" element={<ProductPage category={1} />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
