/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import AppContext from '../../context.js';

const Header = () => {
  const { products, setCurrentProduct } = useContext(AppContext);

  return (
    <div id="header">
      <h1 className="appTitle">Da Island Bois</h1>
      <div className="productHeaderContainer">
        <div className="productChoiceHeader">Popular Products:</div>
        <div className="productHeaderWrapper">
          {products?.map((product) => <div className="productChoice" onClick={() => { setCurrentProduct(product); }} key={product.id}>{product.name}</div>)}
        </div>
      </div>
    </div>
  );
};

export default Header;
