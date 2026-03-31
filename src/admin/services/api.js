import axios from "axios";

const API = axios.create({
  baseURL: "https://soft-cuts-backend.onrender.com", // Replace with your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Admin login
export const adminLogin = (email, password) => API.post("/api/admin/login", { email, password });

// Get bookings
export const getBookings = (token) =>
  API.get("/api/admin/bookings", { headers: { Authorization: `Bearer ${token}` } });

// Change password
export const changePassword = (token, oldPassword, newPassword) =>
  API.post("/api/admin/change-password", { oldPassword, newPassword }, { headers: { Authorization: `Bearer ${token}` } });