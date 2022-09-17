import React, { useEffect, useReducer } from 'react';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import { cartReducer } from './components/reducers/cartReducer';
import './style.css';

export default function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const responseData = await response.json();
      dispatch({ type: 'ADD_PRODUCTS', payload: responseData.products });
    } catch (err) {
      console.log('Error');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="app-container">
      <Products data={state.products} dispatch={dispatch} />
      <Cart data={state.cart} dispatch={dispatch} />
    </div>
  );
}
