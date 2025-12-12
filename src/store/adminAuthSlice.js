// src/store/adminAuthSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Load saved auth from localStorage
const savedAuth = JSON.parse(localStorage.getItem("adminAuth"));

const initialState = {
  isAuthenticated: savedAuth ? true : false,
  admin: savedAuth || null,
};

const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState,
  reducers: {
    adminLogin: (state, action) => {
      state.isAuthenticated = true;
      state.admin = action.payload;
      // save to localStorage
      localStorage.setItem("adminAuth", JSON.stringify(action.payload));
    },

    adminLogout: (state) => {
      state.isAuthenticated = false;
      state.admin = null;
      localStorage.removeItem("adminAuth");
    },
  },
});

export const { adminLogin, adminLogout } = adminAuthSlice.actions;
export default adminAuthSlice.reducer;
