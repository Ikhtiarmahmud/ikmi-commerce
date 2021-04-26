import React from 'react';
import { Route } from 'react-router-dom';
import ProductList from './list';
import CreateProduct from './create';
import EditProduct from './edit';

const Category = () => {
  return (
    <>
      <Route exact path="/profile/product">
          <ProductList />
      </Route>
      <Route path="/profile/product/create">
          <CreateProduct />
      </Route>
      <Route path="/profile/product/edit/:id">
          <EditProduct />
      </Route>
    </>
  );
}

export default Category;