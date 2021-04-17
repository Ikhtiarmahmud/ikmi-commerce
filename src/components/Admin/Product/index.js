import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from './list';
import CreateProduct from './create';

const Category = () => {
  const params = useParams();

  let loadableData;

  switch(params.subSlug){
    case "create":
      loadableData = (<CreateProduct />);
      break;
    default:
      loadableData = (<ProductList />)
  }

  return (
    <>
      { loadableData }
    </>
  );
}

export default Category;