import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ArrowLeft, CreditCard, Banknote, Smartphone } from 'lucide-react';
import { useAppSelector, useAppDispatch } from '@/hooks/redux';
import { placeOrder } from '@/store/slices/orderSlice';
import { clearCart } from '@/store/slices/cartSlice';
import { toast } from 'sonner';

type PaymentMethod = 'cash' | 'card' | 'online';

const CheckoutScreen = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { items, total } = useAppSelector((state) => state.cart);
  const { currentRestaurant } = useAppSelector((state) => state.restaurant);
  
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('cash');
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    phone: '',
    notes: '',
  });

  const finalTotal = total * 1.08; // Including tax and fees
  const estimatedTime = Math.max(...items.map(item => item.id.includes('main') ? 25 : item.id.includes('starter') ? 15 : 10));

  const handlePlaceOrder = () => {
    if (!currentRestaurant) {
      toast.error('Restaurant information not found');
      return;
    }

    const order = {
      restaurantId: currentRestaurant.id,
      tableNumber: currentRestaurant.tableNumber,
      items: items,
      total: finalTotal,
      paymentMethod: paymentMethod,
      customerDetails: customerDetails.name || customerDetails.phone ? customerDetails : undefined,
      estimatedTime: estimatedTime,
    };

    dispatch(placeOrder(order));
    dispatch(clearCart());
    
    toast.success('Order placed successfully!');
    navigate('/confirmation');
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Header */}
      <div className="bg-gradient-primary text-white p-4 shadow-lg">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/cart')}
            className="text-white hover:bg-white/20 mr-4"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <h1 className="font-bold text-lg">Checkout</h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Order Summary */}
        <Card className="p-4 shadow-card">
          <h2 className="font-semibold text-lg mb-3">Order Summary</h2>
          <div className="space-y-2">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>{item.quantity}x {item.name}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <hr className="border-border my-2" />
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Tax & Fees</span>
              <span>${(total * 0.08).toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span className="text-primary">${finalTotal.toFixed(2)}</span>
            </div>
          </div>
        </Card>

        {/* Table Information */}
        <Card className="p-4 shadow-card">
          <h2 className="font-semibold text-lg mb-3">Delivery Details</h2>
          <div className="bg-muted p-3 rounded-lg">
            <p className="font-medium">{currentRestaurant?.name}</p>
            <p className="text-sm text-muted-foreground">Table {currentRestaurant?.tableNumber}</p>
            <p className="text-sm text-muted-foreground">Estimated time: {estimatedTime} minutes</p>
          </div>
        </Card>

        {/* Customer Details (Optional) */}
        <Card className="p-4 shadow-card">
          <h2 className="font-semibold text-lg mb-3">Customer Details (Optional)</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                value={customerDetails.name}
                onChange={(e) => setCustomerDetails(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                placeholder="Your phone number"
                value={customerDetails.phone}
                onChange={(e) => setCustomerDetails(prev => ({ ...prev, phone: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="notes">Special Instructions</Label>
              <Textarea
                id="notes"
                placeholder="Any special requests or dietary requirements..."
                value={customerDetails.notes}
                onChange={(e) => setCustomerDetails(prev => ({ ...prev, notes: e.target.value }))}
              />
            </div>
          </div>
        </Card>

        {/* Payment Method */}
        <Card className="p-4 shadow-card">
          <h2 className="font-semibold text-lg mb-3">Payment Method</h2>
          <RadioGroup value={paymentMethod} onValueChange={(value: PaymentMethod) => setPaymentMethod(value)}>
            <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
              <RadioGroupItem value="cash" id="cash" />
              <Banknote className="w-5 h-5 text-muted-foreground" />
              <Label htmlFor="cash" className="flex-1 cursor-pointer">
                <div>
                  <p className="font-medium">Pay with Cash</p>
                  <p className="text-sm text-muted-foreground">Pay when your order arrives</p>
                </div>
              </Label>
            </div>
            
            <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
              <RadioGroupItem value="card" id="card" />
              <CreditCard className="w-5 h-5 text-muted-foreground" />
              <Label htmlFor="card" className="flex-1 cursor-pointer">
                <div>
                  <p className="font-medium">Pay with Card</p>
                  <p className="text-sm text-muted-foreground">Pay at the table with card terminal</p>
                </div>
              </Label>
            </div>
            
            <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors opacity-50">
              <RadioGroupItem value="online" id="online" disabled />
              <Smartphone className="w-5 h-5 text-muted-foreground" />
              <Label htmlFor="online" className="flex-1 cursor-pointer">
                <div>
                  <p className="font-medium">Online Payment</p>
                  <p className="text-sm text-muted-foreground">Coming Soon - Pay with mobile app</p>
                </div>
              </Label>
            </div>
          </RadioGroup>
        </Card>
      </div>

      {/* Place Order Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t p-4">
        <Button
          onClick={handlePlaceOrder}
          className="w-full bg-gradient-primary hover:bg-primary-dark text-white font-semibold py-6 text-lg shadow-button"
        >
          Place Order • ${finalTotal.toFixed(2)}
        </Button>
      </div>
    </div>
  );
};

export default CheckoutScreen;