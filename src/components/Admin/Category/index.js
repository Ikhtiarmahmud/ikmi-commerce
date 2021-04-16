import React from 'react';
import { useParams } from 'react-router-dom';
import CategoryList from './list';
import CreateCategory from './create';

const Category = () => {
  const params = useParams();

  let loadableData;

  switch(params.subSlug){
    case "create":
      loadableData = (<CreateCategory />);
      break;
    default:
      loadableData = (<CategoryList />)
  }

  return (
    <>
      { loadableData }
    </>
  );
}

export default Category;