import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { QrCode, Store, MapPin } from 'lucide-react';
import { useAppDispatch } from '@/hooks/redux';
import { setRestaurant } from '@/store/slices/restaurantSlice';
import { dummyRestaurant } from '@/data/dummyData';

const LandingScreen = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Simulate QR code scan detecting restaurant and table
    dispatch(setRestaurant(dummyRestaurant));
  }, [dispatch]);

  const handleStartOrdering = () => {
    navigate('/menu');
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto space-y-6">
        {/* QR Code Visual Indicator */}
        <div className="text-center text-white mb-8">
          <div className="w-20 h-20 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
            <QrCode className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-lg font-medium opacity-90">QR Code Detected</h2>
        </div>

        {/* Restaurant Info Card */}
        <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-float p-6">
          <div className="text-center space-y-4">
            {/* Restaurant Logo */}
            <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-button">
              {dummyRestaurant.logo}
            </div>

            {/* Restaurant Name */}
            <h1 className="text-2xl font-bold text-foreground">
              {dummyRestaurant.name}
            </h1>

            {/* Table Info */}
            <div className="flex items-center justify-center space-x-4 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Table {dummyRestaurant.tableNumber}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Store className="w-4 h-4" />
                <span className="text-sm">Dine In</span>
              </div>
            </div>

            {/* Welcome Message */}
            <div className="text-center py-4">
              <p className="text-muted-foreground">
                Welcome! ZappQ Restaurant our delicious menu and place your order directly from your table.
              </p>
            </div>

            {/* Start Ordering Button */}
            <Button
              onClick={handleStartOrdering}
              className="w-full bg-gradient-primary hover:bg-primary-dark text-white font-semibold py-6 text-lg shadow-button transition-all duration-300 hover:shadow-float hover:scale-[1.02]"
            >
              Start Ordering
            </Button>
          </div>
        </Card>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 text-center text-white/80 text-xs">
          <div className="space-y-2">
            <div className="w-8 h-8 mx-auto bg-white/20 rounded-lg flex items-center justify-center">
              <QrCode className="w-4 h-4" />
            </div>
            <p>Quick Order</p>
          </div>
          <div className="space-y-2">
            <div className="w-8 h-8 mx-auto bg-white/20 rounded-lg flex items-center justify-center">
              <Store className="w-4 h-4" />
            </div>
            <p>Table Service</p>
          </div>
          <div className="space-y-2">
            <div className="w-8 h-8 mx-auto bg-white/20 rounded-lg flex items-center justify-center">
              <MapPin className="w-4 h-4" />
            </div>
            <p>Live Tracking</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;