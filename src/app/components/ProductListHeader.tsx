import React, { useEffect } from 'react';
import { useFilterContext } from '../../context/FilterContext';
import { Select, MenuItem, Typography, FormControl, InputLabel } from '@mui/material';
import { EcommerceServices } from '@/services/apiServices';

const ProductListHeader = () => {
    const { sortBy, setSortBy, page, setPage, order, setOrder, limit, setProducts } = useFilterContext();

    const fetchSortedData = async () => {
        try {
            const response = await EcommerceServices.getSortedProductsList(limit, page * limit, order)
            if (response?.status === 200) {
                setProducts(response?.data?.products)
            }

        } catch (e) {
            console.error('error fetching sorted Data', e)
        }
    }

    useEffect(() => {
        fetchSortedData();
    }, [order])

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0' }}>
            <Typography variant="subtitle1">Showing Results</Typography>
            <FormControl>
                {/* <InputLabel id="sort-select-label">Sort By</InputLabel> */}
                <Select
                    labelId="sort-select-label"
                    value={order}
                    onChange={(e) => setOrder(e.target.value)}
                    // label="Sort By"
                >
                
                    <MenuItem value="sortBy">Sort By</MenuItem>
                    <MenuItem value="asc">Price: Low to High</MenuItem>
                    <MenuItem value="desc">Price: High to Low</MenuItem>
                </Select>
            </FormControl>

            {/* Pagination */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <button onClick={() => setPage(page - 1)} disabled={page <= 1}>Previous</button>
                <Typography variant="body2" style={{ margin: '0 10px' }}>Page {page}</Typography>
                <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
            </div>
        </div>
    );
};

export default ProductListHeader;
