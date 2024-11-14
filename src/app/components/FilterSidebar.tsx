import React, { useEffect, useState } from 'react';
import { useFilterContext } from '../../context/FilterContext';
import { Slider, Checkbox, FormControlLabel, Typography, FormGroup } from '@mui/material';
import { EcommerceServices } from '@/services/apiServices';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  description: string;
  category: string; // The category this product belongs to
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

  useEffect(() => {
    fetchCategories();
    // fetchAllProducts();
  }, [])

  useEffect(() => {
    // setProducts(filteredProducts.slice((page - 1) * limit, ((page - 1) * limit) + limit))
  }, [filteredProducts, page])

  const fetchProductByCategoryList = async () => {
    const skip = (page-1)*limit
    try {
      const response = await axios.post('/api/product/', { selectedCategories, limit, skip });
      setProducts(response?.data?.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  useEffect(()=>{
    if (selectedCategories.length) {
      fetchProductByCategoryList()
    }

  },[selectedCategories, page])

  // useEffect(() => {
  //   // filterProducts(filteredProducts);
  //   if (selectedCategories.length >= 1) {
  //     fetchProductByCategory(selectedCategories[selectedCategories?.length - 1]);
  //   }

  //   console.log('selected categories', selectedCategories)
  //   console.log('products List', products, filteredProducts)
  // }, [selectedCategories])

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

  const fetchProductByCategory = async (category: string) => {
    try {
      const response = await EcommerceServices.getProductsListByCategory(category)

      switch (selectedCategories?.length) {
        case 1:
          // setFilteredProducts(response?.data?.products);
          setProducts(response?.data?.products)
          break;
        case 0:
          console.log('testing pagination', filteredProducts)
          const noCategoryResponse = await EcommerceServices.getPaginatedProductsList(limit, 0)
          if (noCategoryResponse?.status === 200) {
            setFilteredProducts(noCategoryResponse.data?.products)
          }
        default:
          if ((selectedCategories?.length > 1) && (response?.status === 200)) {
            console.log('default switch', selectedCategories, response?.status)
            setProducts(prev => [...response?.data?.products, ...prev]);
          }
          break;
      }
      // if (selectedCategories?.length === 1) {
      //   setFilteredProducts(response?.data?.products)
      // } else if (selectedCategories?.length === 0) {
      //   console.log('testing pagination')
      //   const noCategoryResponse = await EcommerceServices.getPaginatedProductsList(limit, 0)
      //   if (noCategoryResponse?.status === 200) {
      //     setFilteredProducts(noCategoryResponse.data?.products)
      //   }
      // } else if (selectedCategories?.length > 1) {
      //   setFilteredProducts(prev => [...(response?.data?.products ?? []), ...prev]);
      // }

    } catch (e) {
      console.error('error fetching products by category', e)
    }
  }

  const handleCheckboxChange = (slug: string) => {
    setPage(1)
    setSelectedCategories((prevCategories) => {
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
        onChange={(e, newValue) => setPriceRange(newValue as [number, number])}
        valueLabelDisplay="auto"
        min={0}
        max={500}
      />

      <Typography variant="h6" style={{ marginTop: '20px' }}>Availability</Typography>
      <FormGroup>
        {['In Stock', 'Out of Stock'].map((status) => (
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
