'use client';
import React, { useEffect, useState } from 'react';
import { FilterProvider } from '../context/FilterContext';
import { Container, Box, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Header from './components/Header';
import FilterSidebar from './components/FilterSidebar';
import ProductGrid from './components/ProductGrid';
import ProductListHeader from './components/ProductListHeader';

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState<boolean>(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setloading(true)
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    setProducts(data?.products);
    setloading(false)
  };

  return (
    <FilterProvider>
      <div style={{ display: 'flex' }}>
        <FilterSidebar />
        <div style={{ flex: 1, margin: '5rem 0 0 1rem' }}>
          <ProductListHeader />
          {loading ? <CircularProgress /> : <ProductGrid products={products} />}
        </div>
        {/* <ProductGrid products={products} /> */}
      </div>
    </FilterProvider>
  );
};

export default ProductListPage;
