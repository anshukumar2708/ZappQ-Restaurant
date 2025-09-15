import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useAppSelector, useAppDispatch } from '@/hooks/redux';
import { updateQuantity, removeFromCart } from '@/store/slices/cartSlice';
import { toast } from 'sonner';

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { items, total, itemCount } = useAppSelector((state) => state.cart);
  const { currentRestaurant } = useAppSelector((state) => state.restaurant);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      dispatch(removeFromCart(id));
      toast.success('Item removed from cart');
    } else {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (id: string, name: string) => {
    dispatch(removeFromCart(id));
    toast.success(`${name} removed from cart`);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-gradient-primary text-white p-4 shadow-lg">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/menu')}
              className="text-white hover:bg-white/20 mr-4"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <h1 className="font-bold text-lg">Your Cart</h1>
          </div>
        </div>

        {/* Empty Cart */}
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center">
          <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-4">
            <ShoppingBag className="w-10 h-10 text-muted-foreground" />
          </div>
          <h2 className="text-xl font-semibold text-foreground mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">Add some delicious items from our menu!</p>
          <Button
            onClick={() => navigate('/menu')}
            className="bg-gradient-primary hover:bg-primary-dark text-white"
          >
            Browse Menu
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-white p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/menu')}
            className="text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Menu
          </Button>
          <h1 className="font-bold text-lg">Your Cart</h1>
          <div className="text-right text-sm">
            <p>{itemCount} items</p>
          </div>
        </div>
      </div>

      {/* Cart Items */}
      <div className="p-4 pb-32 space-y-3">
        {items.map((item) => (
          <Card key={item.id} className="overflow-hidden shadow-card">
            <div className="flex p-4">
              {/* Item Image */}
              <div className="w-16 h-16 flex-shrink-0 mr-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded"
                />
              </div>

              {/* Item Details */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">{item.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {item.description}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemoveItem(item.id, item.name)}
                    className="text-destructive hover:text-destructive hover:bg-destructive/10 p-1 ml-2"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-primary">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2 bg-muted rounded-lg p-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="w-8 h-8 p-0 hover:bg-background"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="w-8 h-8 p-0 hover:bg-background"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Order Summary */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t p-4 space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal ({itemCount} items)</span>
            <span className="font-medium">${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Tax & Fees</span>
            <span className="font-medium">${(total * 0.08).toFixed(2)}</span>
          </div>
          <hr className="border-border" />
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span className="text-primary">${(total * 1.08).toFixed(2)}</span>
          </div>
        </div>

        <Button
          onClick={() => navigate('/checkout')}
          className="w-full bg-gradient-primary hover:bg-primary-dark text-white font-semibold py-6 text-lg shadow-button"
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartScreen;