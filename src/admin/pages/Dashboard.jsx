import React, { useEffect, useState } from "react";
import { getBookings } from "../services/api";
import { Box, Typography } from "@mui/material";

export default function Dashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const token = localStorage.getItem("adminToken");
      const res = await getBookings(token);
      setBookings(res.data);
    };

    fetchBookings();
  }, []);

  return (
    <Box sx={{ p: 4, bgcolor: "#0D0D0D", minHeight: "100vh" }}>
      <Typography variant="h4" sx={{ color: "#D4AF37", mb: 3 }}>
        Bookings
      </Typography>

      {bookings.map((b, i) => (
        <Box
          key={i}
          sx={{
            bgcolor: "#111",
            p: 2,
            mb: 2,
            borderLeft: "4px solid #D4AF37",
          }}
        >
          <Typography sx={{ color: "#fff" }}>
            {b.name} - {b.service}
          </Typography>
          <Typography sx={{ color: "#aaa" }}>{b.date}</Typography>
        </Box>
      ))}
    </Box>
  );
}