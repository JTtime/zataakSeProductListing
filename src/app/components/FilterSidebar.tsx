import React, { useEffect, useState } from 'react';
import { useFilterContext } from '../../context/FilterContext';
import { Slider, Checkbox, FormControlLabel, Typography, FormGroup, Button } from '@mui/material';
import { EcommerceServices } from '@/services/apiServices';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  images: string[];
}

const FilterSidebar = () => {
  const {
    categories,
    priceRange,
    availability,
    page,
    limit,
    setCategories,
    setPriceRange,
    setAvailability,
    setProducts,
    products,
    setPage,
    selectedCategories,
    setSelectedCategories,
  } = useFilterContext();


  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [debouncedPriceRange, setDebouncedPriceRange] = useState<[number, number]>([0, 14000]);


  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null);


  useEffect(() => {
    fetchCategories();
    // fetchAllProducts();
  }, [])


  const fetchProductByCategoryList = async () => {
    const skip = (page - 1) * limit
    try {
      const response = await axios.post('https://productlistingzataaksebackend.onrender.com/api/products/', { selectedCategories, limit, skip, availability, priceRange: debouncedPriceRange });
      setProducts(response?.data?.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  useEffect(() => {
    if (selectedCategories.length || availability.length || debouncedPriceRange.length === 2) {
      fetchProductByCategoryList()
    }
  }, [selectedCategories, page, availability, debouncedPriceRange])


  const fetchCategories = async () => {
    try {
      const response = await EcommerceServices.getProductCategoriesList();
      if (response?.status === 200) {
        setCategories(response?.data)
      }
    } catch (e) {
      console.error('error fetching categories', e);
    }
  }

  const fetchAllProducts = async () => {
    try {
      const response = await EcommerceServices.getProductsList();
      if (response?.status === 200) {
        setFilteredProducts(response?.data?.products[0].products); // Store all products
        // filterProducts(response?.data?.products);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // const filterProducts = (allProducts: Product[]) => {
  //   if (selectedCategories?.length === 0) {
  //     setProducts(allProducts.slice(page*limit-1, page*limit+limit));
  //   } else {
  //     const filtered = allProducts?.filter((product) =>
  //       selectedCategories?.includes(product?.category)
  //     );
  //     if (filtered?.length) {
  //       console.log('filtered', filtered)
  //       setProducts(filtered);
  //     }      
  //   }
  // };

  // const fetchProductByCategory = async (category: string) => {
  //   try {
  //     const response = await EcommerceServices.getProductsListByCategory(category)

  //     switch (selectedCategories?.length) {
  //       case 1:
  //         // setFilteredProducts(response?.data?.products);
  //         setProducts(response?.data?.products)
  //         break;
  //       case 0:
  //         console.log('testing pagination', filteredProducts)
  //         const noCategoryResponse = await EcommerceServices.getPaginatedProductsList(limit, 0)
  //         if (noCategoryResponse?.status === 200) {
  //           setFilteredProducts(noCategoryResponse.data?.products)
  //         }
  //       default:
  //         if ((selectedCategories?.length > 1) && (response?.status === 200)) {
  //           console.log('default switch', selectedCategories, response?.status)
  //           setProducts(prev => [...response?.data?.products, ...prev]);
  //         }
  //         break;
  //     }
  //     // if (selectedCategories?.length === 1) {
  //     //   setFilteredProducts(response?.data?.products)
  //     // } else if (selectedCategories?.length === 0) {
  //     //   console.log('testing pagination')
  //     //   const noCategoryResponse = await EcommerceServices.getPaginatedProductsList(limit, 0)
  //     //   if (noCategoryResponse?.status === 200) {
  //     //     setFilteredProducts(noCategoryResponse.data?.products)
  //     //   }
  //     // } else if (selectedCategories?.length > 1) {
  //     //   setFilteredProducts(prev => [...(response?.data?.products ?? []), ...prev]);
  //     // }

  //   } catch (e) {
  //     console.error('error fetching products by category', e)
  //   }
  // }

  const handleCheckboxChange = (slug: string) => {
    setPage(1)
    // @ts-ignore
    setSelectedCategories((prevCategories: string[]) => {
      if (prevCategories.includes(slug)) {
        console.log('prev categories', prevCategories)

        // setProducts((prevProducts) => {
        //   // Filter out the products that belong to the unchecked category
        //   const filteredProducts = prevProducts.filter((product) => product.category !== slug);
        //   return filteredProducts;
        // });

        return (prevCategories.filter((cat) => cat !== slug))
      }
      else {
        // fetchProductByCategory(slug)
        return ([...prevCategories, slug])
      }
    }
    );
    // fetchProductByCategory(slug);
  };

  const handleSliderChange = (e: Event, newValue: [number, number]) => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    
    const timeout = setTimeout(() => {
      setDebouncedPriceRange(newValue); 
    }, 1000);

    setDebounceTimeout(timeout); 
    setPriceRange(newValue); 
  };

  const handleResetSlider = () => {
    const defaultPriceRange: [number, number] = [0, 14000];
    setPriceRange(defaultPriceRange); 
    setDebouncedPriceRange(defaultPriceRange); 
    setPage(1);
  };


  return (
    <div style={{ width: '250px', padding: '1rem', marginTop: '5rem' }}>
      <Typography variant="h6">Categories</Typography>
      <FormGroup>
        {categories?.map((category, index) => (
          <FormControlLabel
            key={category.slug + index}
            control={<Checkbox
              checked={selectedCategories?.includes(category.slug)}
              onChange={() => handleCheckboxChange(category.slug)}
            />}
            label={category.name}
          />
        ))}
      </FormGroup>

      <Typography variant="h6" style={{ marginTop: '20px' }}>Price Range</Typography>
      <Slider
        value={priceRange}
        //@ts-ignore
        onChange={(e, value)=>handleSliderChange(e, value)}
        valueLabelDisplay="auto"
        min={0}
        max={14000}
        valueLabelFormat={(value) => `$${value}`}
      />
      <Typography variant="body2" style={{ marginTop: '10px' }}>
        {`$${priceRange[0]} - $${priceRange[1]}`}
      </Typography>


      <Button
        variant="outlined"
        fullWidth
        onClick={handleResetSlider}
        style={{ marginTop: '20px' }}
      >
        Reset Price Range
      </Button>

      <Typography variant="h6" style={{ marginTop: '20px' }}>Availability</Typography>
      <FormGroup>
        {['In Stock', 'Low Stock', 'Out of Stock'].map((status) => (
          <FormControlLabel
            key={status}
            control={<Checkbox checked={availability.includes(status)} onChange={() => setAvailability(status)} />}
            label={status}
          />
        ))}
      </FormGroup>
    </div>
  );
};

export default FilterSidebar;
