import React from 'react';
import { useFilterContext } from '../../context/FilterContext';
import { Select, MenuItem, Typography } from '@mui/material';

const ProductListHeader = () => {
    const { sortBy, setSortBy, page, setPage } = useFilterContext();

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0' }}>
            <Typography variant="subtitle1">Showing Results</Typography>
            <Select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as string)}
            >
                <MenuItem value="Most Popular">Most Popular</MenuItem>
                <MenuItem value="Price: Low to High">Price: Low to High</MenuItem>
                <MenuItem value="Price: High to Low">Price: High to Low</MenuItem>
            </Select>

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
