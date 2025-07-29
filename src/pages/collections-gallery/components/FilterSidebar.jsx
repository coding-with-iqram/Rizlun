import React from 'react';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const FilterSidebar = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  isOpen, 
  onClose 
}) => {
  const priceRanges = [
    { value: '0-50', label: '$0 - $50' },
    { value: '50-100', label: '$50 - $100' },
    { value: '100-200', label: '$100 - $200' },
    { value: '200+', label: '$200+' }
  ];

  const intensityLevels = [
    { value: 'light', label: 'Light & Fresh' },
    { value: 'moderate', label: 'Moderate' },
    { value: 'strong', label: 'Strong & Bold' }
  ];

  const seasons = [
    { value: 'spring', label: 'Spring' },
    { value: 'summer', label: 'Summer' },
    { value: 'autumn', label: 'Autumn' },
    { value: 'winter', label: 'Winter' }
  ];

  const fragranceFamilies = [
    { value: 'floral', label: 'Floral' },
    { value: 'woody', label: 'Woody' },
    { value: 'citrus', label: 'Citrus' },
    { value: 'oriental', label: 'Oriental' },
    { value: 'fresh', label: 'Fresh' },
    { value: 'spicy', label: 'Spicy' }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-primary/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:sticky top-0 left-0 h-screen lg:h-auto w-80 lg:w-full
        bg-background lg:bg-transparent border-r lg:border-r-0 border-border
        z-50 lg:z-auto transform transition-transform duration-300 lg:transform-none
        overflow-y-auto lg:overflow-visible
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6 lg:p-0">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <h3 className="font-display font-bold text-lg text-primary">
              Filters
            </h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
            >
              <Icon name="X" size={20} />
            </Button>
          </div>

          {/* Desktop Header */}
          <div className="hidden lg:flex items-center justify-between mb-6">
            <h3 className="font-display font-bold text-lg text-primary">
              Filter Collections
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="text-accent hover:text-accent/80"
            >
              Clear All
            </Button>
          </div>

          <div className="space-y-6">
            {/* Price Range */}
            <div>
              <h4 className="font-body font-semibold text-primary mb-3">
                Price Range
              </h4>
              <Select
                options={priceRanges}
                value={filters.priceRange}
                onChange={(value) => onFilterChange('priceRange', value)}
                placeholder="Select price range"
              />
            </div>

            {/* Scent Intensity */}
            <div>
              <h4 className="font-body font-semibold text-primary mb-3">
                Scent Intensity
              </h4>
              <div className="space-y-2">
                {intensityLevels.map((intensity) => (
                  <Checkbox
                    key={intensity.value}
                    label={intensity.label}
                    checked={filters.intensity.includes(intensity.value)}
                    onChange={(e) => {
                      const newIntensity = e.target.checked
                        ? [...filters.intensity, intensity.value]
                        : filters.intensity.filter(i => i !== intensity.value);
                      onFilterChange('intensity', newIntensity);
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Seasonal Appropriateness */}
            <div>
              <h4 className="font-body font-semibold text-primary mb-3">
                Season
              </h4>
              <div className="space-y-2">
                {seasons.map((season) => (
                  <Checkbox
                    key={season.value}
                    label={season.label}
                    checked={filters.seasons.includes(season.value)}
                    onChange={(e) => {
                      const newSeasons = e.target.checked
                        ? [...filters.seasons, season.value]
                        : filters.seasons.filter(s => s !== season.value);
                      onFilterChange('seasons', newSeasons);
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Fragrance Family */}
            <div>
              <h4 className="font-body font-semibold text-primary mb-3">
                Fragrance Family
              </h4>
              <div className="space-y-2">
                {fragranceFamilies.map((family) => (
                  <Checkbox
                    key={family.value}
                    label={family.label}
                    checked={filters.families.includes(family.value)}
                    onChange={(e) => {
                      const newFamilies = e.target.checked
                        ? [...filters.families, family.value]
                        : filters.families.filter(f => f !== family.value);
                      onFilterChange('families', newFamilies);
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Availability */}
            <div>
              <h4 className="font-body font-semibold text-primary mb-3">
                Availability
              </h4>
              <div className="space-y-2">
                <Checkbox
                  label="In Stock Only"
                  checked={filters.inStockOnly}
                  onChange={(e) => onFilterChange('inStockOnly', e.target.checked)}
                />
                <Checkbox
                  label="Limited Edition"
                  checked={filters.limitedEdition}
                  onChange={(e) => onFilterChange('limitedEdition', e.target.checked)}
                />
                <Checkbox
                  label="New Arrivals"
                  checked={filters.newArrivals}
                  onChange={(e) => onFilterChange('newArrivals', e.target.checked)}
                />
              </div>
            </div>
          </div>

          {/* Mobile Apply Button */}
          <div className="mt-8 lg:hidden">
            <Button
              variant="default"
              fullWidth
              onClick={onClose}
              className="bg-luxury-gold hover:bg-luxury-amber"
            >
              Apply Filters
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;