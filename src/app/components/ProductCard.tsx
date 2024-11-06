
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

type ProductProps = {
  title: string;
  category: string;
  price: number;
  thumbnail: string;
};

const ProductCard: React.FC<ProductProps> = ({ title, category, price, thumbnail }) => {
  return (
    <Card sx={{ maxWidth: 280, width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ height: 200, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <CardMedia
          component="img"
          image={thumbnail}
          alt={title}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '4px',
          }}
        />
      </Box>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {category}
        </Typography>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body1" color="primary">
          ${price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
