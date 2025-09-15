import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, Clock, Receipt, Eye } from 'lucide-react';
import { useAppSelector } from '@/hooks/redux';

const OrderConfirmationScreen = () => {
  const navigate = useNavigate();
  const { currentOrder } = useAppSelector((state) => state.order);
  const { currentRestaurant } = useAppSelector((state) => state.restaurant);

  useEffect(() => {
    if (!currentOrder) {
      navigate('/');
    }
  }, [currentOrder, navigate]);

  if (!currentOrder) {
    return null;
  }

  const handleTrackOrder = () => {
    navigate('/tracking');
  };

  const handleNewOrder = () => {
    navigate('/menu');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="p-4 max-w-md mx-auto space-y-6">
        {/* Success Animation */}
        <div className="text-center py-8">
          <div className="w-20 h-20 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center animate-pulse">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Order Placed Successfully!</h1>
          <p className="text-muted-foreground">Thank you for your order. We're preparing it now.</p>
        </div>

        {/* Order Details Card */}
        <Card className="p-6 shadow-card">
          <div className="space-y-4">
            {/* Order Number */}
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Receipt className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Order Number</span>
              </div>
              <p className="text-xl font-bold text-primary">{currentOrder.id}</p>
            </div>

            <hr className="border-border" />

            {/* Restaurant & Table */}
            <div className="text-center">
              <h3 className="font-semibold text-lg">{currentRestaurant?.name}</h3>
              <p className="text-muted-foreground">Table {currentOrder.tableNumber}</p>
            </div>

            {/* Estimated Time */}
            <div className="bg-muted p-4 rounded-lg text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Clock className="w-5 h-5 text-accent" />
                <span className="font-medium text-accent">Estimated Preparation Time</span>
              </div>
              <p className="text-2xl font-bold text-foreground">{currentOrder.estimatedTime} minutes</p>
              <p className="text-sm text-muted-foreground mt-1">
                Your order will be ready around{' '}
                {new Date(Date.now() + currentOrder.estimatedTime * 60000).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>

            {/* Order Summary */}
            <div>
              <h4 className="font-medium mb-2">Order Summary</h4>
              <div className="space-y-1 text-sm">
                {currentOrder.items.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span>{item.quantity}x {item.name}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <hr className="border-border my-2" />
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span className="text-primary">${currentOrder.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="text-sm">
              <span className="text-muted-foreground">Payment: </span>
              <span className="font-medium capitalize">{currentOrder.paymentMethod}</span>
            </div>
          </div>
        </Card>

        {/* Status Information */}
        <Card className="p-4 shadow-card">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm">Order received and confirmed</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
              <span className="text-sm text-muted-foreground">Kitchen preparation (in progress)</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
              <span className="text-sm text-muted-foreground">Ready for pickup</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
              <span className="text-sm text-muted-foreground">Served to table</span>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            onClick={handleTrackOrder}
            className="w-full bg-gradient-primary hover:bg-primary-dark text-white font-semibold py-6 text-lg shadow-button"
          >
            <Eye className="w-5 h-5 mr-2" />
            Track Your Order
          </Button>
          
          <Button
            onClick={handleNewOrder}
            variant="outline"
            className="w-full py-6 text-lg border-primary text-primary hover:bg-primary/5"
          >
            Order More Items
          </Button>
        </div>

        {/* Help Text */}
        <div className="text-center text-sm text-muted-foreground">
          <p>Need help? Ask your server or call the restaurant directly.</p>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationScreen;