import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store/store";

// Screens
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
import MenuScreen from "./pages/MenuScreen";
import CartScreen from "./pages/CartScreen";
import CheckoutScreen from "./pages/CheckoutScreen";
import OrderConfirmationScreen from "./pages/OrderConfirmationScreen";
import OrderTrackingScreen from "./pages/OrderTrackingScreen";
import QRGenerator from "./pages/QRGenerator";
import NotFound from "./pages/NotFound";
// import LandingScreen from "./pages/LandingScreen";

// Components
import Header from "./components/ui/header";
import Footer from "./components/ui/footer";
import RegistrationScreen from "./pages/RegistrationScreen";
import RestaurantDashboard from "./pages/Restaurant/RestaurantDashboard";
import Dashboard from "./pages/Dashboard";
import AuthLayout from "./components/ui/authLayout";
import TableManagement from "./pages/Restaurant/TableManagement";

const queryClient = new QueryClient();

const App = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<HomeScreen />} />
            {/* <Route path="/" element={<LandingScreen />} /> */}
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/registration" element={<RegistrationScreen />} />
            <Route path="/menu" element={<MenuScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/checkout" element={<CheckoutScreen />} />
            <Route path="/confirmation" element={<OrderConfirmationScreen />} />
            <Route path="/tracking" element={<OrderTrackingScreen />} />
            <Route path="/qr" element={<QRGenerator />} />

            {/* Restaurant Owner */}

            <Route element={<AuthLayout />} >
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/table-management" element={<TableManagement />} />
            </Route>

            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </Provider>
);

export default App;
