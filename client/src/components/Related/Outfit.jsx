import React, { useState, useEffect, useContext } from 'react';
import RelatedContext from './context';
import AppContext from '../../context';
import xIcon from '../../assets/Xicon.png';
import Stars from '../Reviews/Stars.jsx';

const Outfit = ({ product, removeEntry }) => {
  const context = useContext(RelatedContext);
  const appContext = useContext(AppContext);

  // console.log(product);

  useEffect(() => {
  }, [context]);

  return (
    <div>
      <div id="default_image">
        {' '}
        <img src={product.photo} width="150" height="150" />
        <div className="actionButton" onClick={() => { removeEntry(product.id); }}><img src={xIcon} height="20" width="25" /></div>
      </div>
      <div className="product_category">{product.category}</div>
      <div className="product_name">{product.name}</div>
      <div className="product_price">{product.price}</div>
      <Stars average={product.average} />
    </div>
  );
};

export default Outfit;
