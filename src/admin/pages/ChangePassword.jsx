import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { changePassword } from "../services/api";

export default function ChangePassword() {
  const [oldPassword, setOld] = useState("");
  const [newPassword, setNew] = useState("");

  const handleChange = async () => {
    const token = localStorage.getItem("adminToken");
    await changePassword(token, oldPassword, newPassword);
    alert("Password updated!");
  };

  return (
    <Box sx={{ p: 4, bgcolor: "#0D0D0D", minHeight: "100vh" }}>
      <Typography sx={{ color: "#D4AF37", mb: 2 }}>
        Change Password
      </Typography>

      <TextField
        label="Old Password"
        fullWidth
        sx={{ mb: 2, bgcolor: "#fff" }}
        onChange={(e) => setOld(e.target.value)}
      />

      <TextField
        label="New Password"
        fullWidth
        sx={{ mb: 2, bgcolor: "#fff" }}
        onChange={(e) => setNew(e.target.value)}
      />

      <Button
        variant="contained"
        sx={{ bgcolor: "#D4AF37", color: "#000" }}
        onClick={handleChange}
      >
        Update
      </Button>
    </Box>
  );
}