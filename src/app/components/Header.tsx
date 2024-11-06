
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Header() {
  return (
    <AppBar position="fixed" color="default" elevation={2}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Flatlogic
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Typography variant="body1">Home</Typography>
          <Typography variant="body1">Pages</Typography>
          <Typography variant="body1">Shop</Typography>
          <Typography variant="body1">Blog</Typography>
        </Box>
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
        <IconButton color="inherit">
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
