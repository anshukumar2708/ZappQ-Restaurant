import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import LandingScreen from "./pages/LandingScreen";
import MenuScreen from "./pages/MenuScreen";
import CartScreen from "./pages/CartScreen";
import CheckoutScreen from "./pages/CheckoutScreen";
import OrderConfirmationScreen from "./pages/OrderConfirmationScreen";
import OrderTrackingScreen from "./pages/OrderTrackingScreen";
import NotFound from "./pages/NotFound";
import QR from "./pages/QRGenerator";
import QRGenerator from "./pages/QRGenerator";

const queryClient = new QueryClient();

const App = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingScreen />} />
            <Route path="/menu" element={<MenuScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/checkout" element={<CheckoutScreen />} />
            <Route path="/confirmation" element={<OrderConfirmationScreen />} />
            <Route path="/tracking" element={<OrderTrackingScreen />} />
            <Route path="/qr" element={<QRGenerator />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </Provider>
);

export default App;
