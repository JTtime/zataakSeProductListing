'use client';
import React, { useEffect, useState } from 'react';
import { FilterProvider, useFilterContext } from '../../context/FilterContext';
import { Container, Box, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Header from './Header';
import FilterSidebar from './FilterSidebar';
import ProductGrid from './ProductGrid';
import ProductListHeader from './ProductListHeader';
import { EcommerceServices } from '@/services/apiServices';

const ProductListPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setloading] = useState<boolean>(false);
    const { page } = useFilterContext();
    const limit = 12

    useEffect(() => {
        fetchProducts();
    }, [page]);

    const fetchProducts = async () => {
        setloading(true)

        try {
            // const response = await EcommerceServices.getProductsList();
            const response = await EcommerceServices.getPaginatedProductsList(limit, page * limit);
            if (response?.status === 200) {
                setProducts(response?.data?.products)
            }
        } catch (e) {
            console.error('Error fetching products List', e)
        } finally {
            setloading(false)
        }
    };

    return (

        <div style={{ display: 'flex' }}>
            <FilterSidebar />
            <div style={{ flex: 1, margin: '5rem 0 0 1rem' }}>
                <ProductListHeader />
                {loading ? <CircularProgress /> : <ProductGrid products={products} />}
            </div>
            {/* <ProductGrid products={products} /> */}
        </div>

    );
};

export default ProductListPage;
