import React, { useState } from "react";
import { Box, Typography, TextField, Button, Container } from "@mui/material";
import { adminLogin } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await adminLogin(email, password);
      localStorage.setItem("adminToken", res.data.token);
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        mt: 10,
        bgcolor: "#0D0D0D",
        p: 4,
        borderRadius: 2,
      }}
    >
      <Typography
        variant="h5"
        sx={{ color: "#D4AF37", mb: 3, textAlign: "center" }}
      >
        Admin Login
      </Typography>

      {error && (
        <Typography sx={{ color: "red", mb: 2 }}>{error}</Typography>
      )}

      <TextField
        fullWidth
        label="Email"
        variant="filled"
        sx={{ mb: 2, bgcolor: "#fff" }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        fullWidth
        label="Password"
        type="password"
        variant="filled"
        sx={{ mb: 3, bgcolor: "#fff" }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        fullWidth
        variant="contained"
        sx={{ bgcolor: "#D4AF37", color: "#000" }}
        onClick={handleLogin}
      >
        Login
      </Button>
    </Container>
  );
}