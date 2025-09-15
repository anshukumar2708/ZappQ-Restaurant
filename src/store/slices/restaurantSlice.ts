import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  available: boolean;
  preparationTime: number; // in minutes
}

export interface Restaurant {
  id: string;
  name: string;
  logo: string;
  tableNumber: string;
  menu: MenuItem[];
  categories: string[];
}

interface RestaurantState {
  currentRestaurant: Restaurant | null;
  selectedCategory: string;
}

const initialState: RestaurantState = {
  currentRestaurant: null,
  selectedCategory: 'Starters',
};

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<Restaurant>) => {
      state.currentRestaurant = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setRestaurant, setSelectedCategory } = restaurantSlice.actions;
export default restaurantSlice.reducer;