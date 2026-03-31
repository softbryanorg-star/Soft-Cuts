import axios from "axios";

// ✅ Base URL from environment (fallback included for safety)
const BASE_URL =
  import.meta.env.VITE_API_URL || "https://soft-cuts-backend.onrender.com";

// ✅ Create axios instance
const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Request interceptor (optional but powerful)
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// =========================
// ✅ AUTH
// =========================

export const adminLogin = (email, password) =>
  API.post("/api/admin/login", { email, password });

// =========================
// ✅ ADMIN
// =========================

export const getBookings = () =>
  API.get("/api/admin/bookings");

export const changePassword = (oldPassword, newPassword) =>
  API.post("/api/admin/change-password", {
    oldPassword,
    newPassword,
  });

// =========================
// ✅ ERROR HANDLING (OPTIONAL BUT PRO)
// =========================

API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(
      "API ERROR:",
      error.response?.data || error.message
    );
    return Promise.reject(error);
  }
);

export default API;