import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ShoppingCart, Plus, Clock } from 'lucide-react';
import { useAppSelector, useAppDispatch } from '@/hooks/redux';
import { setSelectedCategory } from '@/store/slices/restaurantSlice';
import { addToCart } from '@/store/slices/cartSlice';
import { MenuItem } from '@/store/slices/restaurantSlice';
import { toast } from 'sonner';

const MenuScreen = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { currentRestaurant, selectedCategory } = useAppSelector((state) => state.restaurant);
  const { itemCount, total } = useAppSelector((state) => state.cart);
  
  if (!currentRestaurant) {
    navigate('/');
    return null;
  }

  const handleAddToCart = (item: MenuItem) => {
    dispatch(addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      description: item.description,
      category: item.category,
    }));
    
    toast.success(`${item.name} added to cart!`, {
      description: `$${item.price.toFixed(2)} • ${item.preparationTime} min prep time`,
    });
  };

  const filteredItems = currentRestaurant.menu.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-white p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/')}
            className="text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div className="text-center">
            <h1 className="font-bold text-lg">{currentRestaurant.name}</h1>
            <p className="text-white/90 text-sm">Table {currentRestaurant.tableNumber}</p>
          </div>
          <div className="w-16" /> {/* Spacer */}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="bg-card border-b p-4">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {currentRestaurant.categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => dispatch(setSelectedCategory(category))}
              className={`whitespace-nowrap ${
                selectedCategory === category 
                  ? 'bg-primary text-primary-foreground shadow-button' 
                  : 'hover:bg-muted'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div className="p-4 pb-24 space-y-4">
        <h2 className="text-xl font-bold text-foreground mb-4">{selectedCategory}</h2>
        
        {filteredItems.map((item) => (
          <Card key={item.id} className="food-card overflow-hidden shadow-card">
            <div className="flex">
              {/* Item Image */}
              <div className="w-24 h-24 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Item Info */}
              <div className="flex-1 p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center space-x-3">
                      <span className="text-lg font-bold text-primary">
                        ${item.price.toFixed(2)}
                      </span>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="w-3 h-3 mr-1" />
                        {item.preparationTime} min
                      </div>
                      {item.available && (
                        <Badge variant="secondary" className="text-xs">
                          Available
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Add Button */}
                  <Button
                    size="sm"
                    onClick={() => handleAddToCart(item)}
                    disabled={!item.available}
                    className="bg-gradient-primary hover:bg-primary-dark text-white shadow-button ml-3"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Floating Cart Button */}
      {itemCount > 0 && (
        <div className="floating-cart">
          <Button
            onClick={() => navigate('/cart')}
            className="bg-gradient-primary hover:bg-primary-dark text-white px-6 py-4 rounded-full shadow-float transition-all duration-300 hover:scale-105"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            <span className="font-semibold">{itemCount} items • ${total.toFixed(2)}</span>
          </Button>
        </div>
      )}
    </div>
  );
};

export default MenuScreen;