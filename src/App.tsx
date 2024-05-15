import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchNews, fetchPages, fetchProductsByCategory } from './store/reducers/ActionCreators';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { MainPage } from './pages/Main';
import { Route, Routes } from 'react-router-dom';
import { NewsPage } from './pages/News/NewsPage';
import { ProductsListPage } from './pages/ProductList/ProductsListPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { ProductPage } from './pages/Product/ProductPage';
import { NewsItemPage } from './pages/NewsItemPage/NewsItemPage';
import { AboutPage } from './pages/About/AboutPage';
import { JobVacancyPage } from './pages/JobVacancy/JobVacancyPage';
import { ContactsPage } from './pages/Сontacts/ContactsPage';
import { EditablePage } from './pages/EditablePage/EditablePage';
import { ProductCategoryPage } from './pages/ProductCaterogy/ProductCategoryPage';

function App() {
  const dispatch = useAppDispatch()
  const {pages, isLoading, error} = useAppSelector(state => state.pageReducer)

  useEffect(() => {
    dispatch(fetchPages())
  }, [])

  return (
    <div className="App">
      <Header />
      <>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsItemPage />} />
          <Route path="/products/category/:id" element={<ProductsListPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/products/subcategory/:id" element={<ProductCategoryPage />} />
          <Route path="/*" element={<NotFoundPage />} />
          {
            pages.map((item, key) => 
                <Route key={key} path={item.path} element={<EditablePage html={item.html} />} />
              )
          }
        </Routes>
      </>
      <Footer />
    </div>
  );
}

export default App;
