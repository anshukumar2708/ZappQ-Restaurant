import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from './cartSlice';

export interface Order {
  id: string;
  restaurantId: string;
  tableNumber: string;
  items: CartItem[];
  total: number;
  status: 'placed' | 'preparing' | 'ready' | 'served';
  paymentMethod: 'cash' | 'card' | 'online';
  customerDetails?: {
    name?: string;
    phone?: string;
    notes?: string;
  };
  timestamp: string;
  estimatedTime: number; // in minutes
}

interface OrderState {
  currentOrder: Order | null;
  orderHistory: Order[];
}

const initialState: OrderState = {
  currentOrder: null,
  orderHistory: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    placeOrder: (state, action: PayloadAction<Omit<Order, 'id' | 'timestamp' | 'status'>>) => {
      const newOrder: Order = {
        ...action.payload,
        id: `ORD-${Date.now()}`,
        timestamp: new Date().toISOString(),
        status: 'placed',
      };
      
      state.currentOrder = newOrder;
      state.orderHistory.push(newOrder);
    },
    updateOrderStatus: (state, action: PayloadAction<{ orderId: string; status: Order['status'] }>) => {
      if (state.currentOrder && state.currentOrder.id === action.payload.orderId) {
        state.currentOrder.status = action.payload.status;
      }
      
      const orderIndex = state.orderHistory.findIndex(order => order.id === action.payload.orderId);
      if (orderIndex !== -1) {
        state.orderHistory[orderIndex].status = action.payload.status;
      }
    },
    clearCurrentOrder: (state) => {
      state.currentOrder = null;
    },
  },
});

export const { placeOrder, updateOrderStatus, clearCurrentOrder } = orderSlice.actions;
export default orderSlice.reducer;