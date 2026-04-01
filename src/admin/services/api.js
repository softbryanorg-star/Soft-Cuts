import axios from "axios";

// ✅ Debug log (THIS IS WHAT WE NEED RIGHT NOW)
console.log("API BASE URL:", import.meta.env.VITE_API_URL);

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

// ✅ Request interceptor
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminToken"); // 🔥 FIXED (you used adminToken in login)

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
  API.put("/api/admin/change-password", {
    oldPassword,
    newPassword,
  });

// =========================
// ✅ ERROR HANDLING
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