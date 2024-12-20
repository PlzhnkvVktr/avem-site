import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import {
  fetchCategories,
  fetchNews,
  fetchPages,
  fetchProducts,
  fetchProductsByCategory
} from './store/reducers/ActionCreators';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { MainPage } from './pages/Main';
import { Route, Routes } from 'react-router-dom';
import { NewsPage } from './pages/News/NewsPage';
import { ProductsListPage } from './pages/ProductList/ProductsListPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { ProductPage } from './pages/Product/ProductPage';
import { NewsItemPage } from './pages/NewsItemPage/NewsItemPage';
import { EditablePage } from './pages/EditablePage/EditablePage';
import { ProductCategoryPage } from './pages/ProductCaterogy/ProductCategoryPage';
import { ProductSubcategoryPage } from './pages/ProductSubcategory/ProductSubcategoryPage';
import { SearchPage } from './pages/SearchPage/SearchPage';
import { EquipmentSelection } from './pages/EquipmentSelection/EquipmentSelection';

function App() {
  const dispatch = useAppDispatch()
  const {pages, isLoading, error} = useAppSelector(state => state.pageReducer)
  const {categories, isLoadingCategory, errorCategory} = useAppSelector(state => state.categoryReducer)

  useEffect(() => {
    dispatch(fetchPages())
    dispatch(fetchCategories())
  }, [])



  return (
    <div className="App">
      <Header categories={categories} pages={pages} />
      <>
        <Routes>
          <Route path="/" element={<MainPage categories={categories} />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsItemPage />} />
          <Route path="/products/category/:id" element={<ProductsListPage />} />
          <Route path="/products/:id" element={<ProductPage categories={categories} />} />
          {/*<Route path="/products_subcategory" element={<ProductSubcategoryPage />} />*/}
          <Route path="/products/subcategory/:id" element={<ProductCategoryPage />} />
          <Route path="/selection" element={<EquipmentSelection categories={categories} />} />
          
          <Route path="/*" element={<NotFoundPage />} />
          {
            pages.map((item, key) => 
                <Route key={key} path={item.path} element={<EditablePage html={item.html} />} />
              )
          }
        </Routes>
      </>
      <Footer categories={categories} pages={pages} />
    </div>
  );
}

export default App;

