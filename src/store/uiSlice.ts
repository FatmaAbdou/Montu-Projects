import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  isSidebarCollapsed: boolean;
  activeSection: string;
}

const initialState: UIState = {
  isSidebarCollapsed: false,
  activeSection: '#dashboard',
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarCollapsed = !state.isSidebarCollapsed;
    },
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload;
    },
  },
});

export const { toggleSidebar, setActiveSection } = uiSlice.actions;
export default uiSlice.reducer;