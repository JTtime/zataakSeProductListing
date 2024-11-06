import React from 'react';
import { useFilterContext } from '../../context/FilterContext';
import { Slider, Checkbox, FormControlLabel, Typography, FormGroup } from '@mui/material';

const FilterSidebar = () => {
  const {
    categories,
    priceRange,
    availability,
    setCategories,
    setPriceRange,
    setAvailability,
  } = useFilterContext();

  return (
    <div style={{ width: '250px', padding: '1rem', marginTop: '5rem' }}>
      <Typography variant="h6">Categories</Typography>
      <FormGroup>
        {['beauty', 'Furniture', 'Lighting', 'Decoration', 'Bedding', 'Curtains', 'Toys'].map((category) => (
          <FormControlLabel
            key={category}
            control={<Checkbox checked={categories.includes(category)} onChange={() => setCategories(category)} />}
            label={category}
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
