import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Clock, CheckCircle, ChefHat, Bell, Utensils } from 'lucide-react';
import { useAppSelector, useAppDispatch } from '@/hooks/redux';
import { updateOrderStatus } from '@/store/slices/orderSlice';

const OrderTrackingScreen = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { currentOrder } = useAppSelector((state) => state.order);
  const { currentRestaurant } = useAppSelector((state) => state.restaurant);
  
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    if (!currentOrder) {
      navigate('/');
      return;
    }

    // Simulate order progress
    const interval = setInterval(() => {
      setTimeElapsed(prev => prev + 1);
    }, 1000);

    // Simulate status updates
    const statusUpdateTimeout = setTimeout(() => {
      if (currentOrder.status === 'placed') {
        dispatch(updateOrderStatus({ orderId: currentOrder.id, status: 'preparing' }));
        setProgress(50);
      }
    }, 5000);

    const statusUpdateTimeout2 = setTimeout(() => {
      if (currentOrder.status === 'preparing') {
        dispatch(updateOrderStatus({ orderId: currentOrder.id, status: 'ready' }));
        setProgress(75);
      }
    }, 15000);

    const statusUpdateTimeout3 = setTimeout(() => {
      if (currentOrder.status === 'ready') {
        dispatch(updateOrderStatus({ orderId: currentOrder.id, status: 'served' }));
        setProgress(100);
      }
    }, 20000);

    return () => {
      clearInterval(interval);
      clearTimeout(statusUpdateTimeout);
      clearTimeout(statusUpdateTimeout2);
      clearTimeout(statusUpdateTimeout3);
    };
  }, [currentOrder, dispatch, navigate]);

  if (!currentOrder) {
    return null;
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'placed':
        return <CheckCircle className="w-6 h-6 text-primary" />;
      case 'preparing':
        return <ChefHat className="w-6 h-6 text-secondary animate-pulse" />;
      case 'ready':
        return <Bell className="w-6 h-6 text-accent animate-bounce" />;
      case 'served':
        return <Utensils className="w-6 h-6 text-accent" />;
      default:
        return null;
    }
  };

  const getStatusMessage = (status: string) => {
    switch (status) {
      case 'placed':
        return 'Order confirmed! Our kitchen team has received your order.';
      case 'preparing':
        return 'Your food is being prepared with care by our chefs.';
      case 'ready':
        return 'Your order is ready! A server will bring it to your table shortly.';
      case 'served':
        return 'Enjoy your meal! Thank you for dining with us.';
      default:
        return '';
    }
  };

  const remainingTime = Math.max(0, currentOrder.estimatedTime * 60 - timeElapsed);
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-white p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/confirmation')}
            className="text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="font-bold text-lg">Track Order</h1>
          <div className="w-16" />
        </div>
      </div>

      <div className="p-4 max-w-md mx-auto space-y-6">
        {/* Order Info */}
        <Card className="p-4 shadow-card">
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">Order #{currentOrder.id}</p>
            <h2 className="font-semibold text-lg">{currentRestaurant?.name}</h2>
            <p className="text-sm text-muted-foreground">Table {currentOrder.tableNumber}</p>
          </div>
        </Card>

        {/* Current Status */}
        <Card className="p-6 shadow-card">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              {getStatusIcon(currentOrder.status)}
            </div>
            
            <div>
              <h3 className="font-semibold text-lg capitalize mb-2">{currentOrder.status}</h3>
              <p className="text-muted-foreground text-sm">{getStatusMessage(currentOrder.status)}</p>
            </div>

            {currentOrder.status !== 'served' && (
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-2xl font-bold">
                    {minutes}:{seconds.toString().padStart(2, '0')}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {currentOrder.status === 'ready' ? 'Being served now' : 'Estimated remaining time'}
                </p>
              </div>
            )}
          </div>
        </Card>

        {/* Progress Tracker */}
        <Card className="p-4 shadow-card">
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>Order Progress</span>
              <span>{progress}% Complete</span>
            </div>
            
            <Progress value={progress} className="h-2" />

            <div className="space-y-3 text-sm">
              <div className={`flex items-center space-x-3 ${
                ['placed', 'preparing', 'ready', 'served'].includes(currentOrder.status) 
                  ? 'text-foreground' : 'text-muted-foreground'
              }`}>
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Order received</span>
              </div>
              
              <div className={`flex items-center space-x-3 ${
                ['preparing', 'ready', 'served'].includes(currentOrder.status) 
                  ? 'text-foreground' : 'text-muted-foreground'
              }`}>
                <ChefHat className={`w-4 h-4 ${
                  currentOrder.status === 'preparing' ? 'text-secondary animate-pulse' : 
                  ['ready', 'served'].includes(currentOrder.status) ? 'text-primary' : 'text-muted-foreground'
                }`} />
                <span>Kitchen preparation</span>
              </div>
              
              <div className={`flex items-center space-x-3 ${
                ['ready', 'served'].includes(currentOrder.status) 
                  ? 'text-foreground' : 'text-muted-foreground'
              }`}>
                <Bell className={`w-4 h-4 ${
                  currentOrder.status === 'ready' ? 'text-accent animate-bounce' :
                  currentOrder.status === 'served' ? 'text-primary' : 'text-muted-foreground'
                }`} />
                <span>Ready for pickup</span>
              </div>
              
              <div className={`flex items-center space-x-3 ${
                currentOrder.status === 'served' ? 'text-foreground' : 'text-muted-foreground'
              }`}>
                <Utensils className={`w-4 h-4 ${
                  currentOrder.status === 'served' ? 'text-accent' : 'text-muted-foreground'
                }`} />
                <span>Served to table</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Order Items */}
        <Card className="p-4 shadow-card">
          <h3 className="font-semibold mb-3">Your Order</h3>
          <div className="space-y-2">
            {currentOrder.items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
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
        </Card>

        {/* Actions */}
        <div className="space-y-3">
          {currentOrder.status !== 'served' && (
            <div className="text-center text-sm text-muted-foreground">
              <p>We'll notify you when your order status changes.</p>
            </div>
          )}
          
          {currentOrder.status === 'served' && (
            <Button
              onClick={() => navigate('/menu')}
              className="w-full bg-gradient-primary hover:bg-primary-dark text-white font-semibold py-6 text-lg shadow-button"
            >
              Order More Items
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderTrackingScreen;