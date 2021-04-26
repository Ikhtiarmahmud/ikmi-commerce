import React from 'react';
import { useParams, Route, Switch  } from 'react-router-dom';
import CategoryList from './list';
import CreateCategory from './create';
import EditCategory from './edit';

const Category = () => {
  return (
    <>
        <Route exact path="/profile/category">
            <CategoryList />
        </Route>
        <Route path="/profile/category/create">
            <CreateCategory />
        </Route>
        <Route path="/profile/category/edit/:id">
            <EditCategory />
        </Route>
    </>
  );
}

export default Category;