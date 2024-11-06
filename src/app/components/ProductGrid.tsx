
import Grid from '@mui/material/Grid2';
import ProductCard from './ProductCard';
import { Box } from '@mui/material';

type Product = {
    id: number;
    title: string;
    category: string;
    price: number;
    thumbnail: string;
};

type ProductGridProps = {
    products: Product[];
};

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
    return (
        <Box sx={{margin: '1rem'}}>
            <Grid container spacing={2}>
                {products.map((product) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id} sx={{ display: 'flex' }}>
                        <ProductCard
                            title={product.title}
                            category={product.category}
                            price={product.price}
                            thumbnail={product.thumbnail}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ProductGrid;
