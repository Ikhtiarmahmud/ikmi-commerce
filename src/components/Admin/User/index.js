import React from 'react';
import { useParams, Route, Switch  } from 'react-router-dom';
import UserList from './list';
import CreateUser from './create';

const Category = () => {
  return (
    <>
        <Route exact path="/profile/users">
            <UserList />
        </Route>
        <Route path="/profile/users/create">
            <CreateUser />
        </Route>
        {/* <Route path="/profile/category/edit/:id">
            <EditCategory />
        </Route> */}
    </>
  );
}

export default Category;