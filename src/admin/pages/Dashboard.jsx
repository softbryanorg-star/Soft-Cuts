import React, { useEffect, useState } from "react";
import { getBookings } from "../services/api";

import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from "@mui/material";

import { FaChevronDown } from "react-icons/fa";

export default function Dashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem("adminToken");

        const res = await getBookings(token);

        setBookings(res.data);
      } catch (error) {
        console.error("Dashboard Error:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#0D0D0D",
        p: { xs: 2, md: 4 },
      }}
    >
      {/* HEADER */}
      <Typography
        variant="h4"
        sx={{
          color: "#D4AF37",
          mb: 4,
          fontWeight: "bold",
          textAlign: "center",
          letterSpacing: "1px",
        }}
      >
        Soft Cuts Bookings
      </Typography>

      {/* EMPTY STATE */}
      {bookings.length === 0 && (
        <Typography
          sx={{
            color: "#999",
            textAlign: "center",
            mt: 8,
          }}
        >
          No bookings yet.
        </Typography>
      )}

      {/* BOOKINGS */}
      {bookings.map((booking, index) => (
        <Accordion
          key={booking._id || index}
          sx={{
            mb: 2,
            bgcolor: "#111",
            color: "#fff",
            border: "1px solid #222",
            borderRadius: "14px !important",
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0,0,0,0.4)",

            "&:before": {
              display: "none",
            },
          }}
        >
          {/* TOP SECTION */}
          <AccordionSummary
            expandIcon={<FaChevronDown color="#D4AF37" />}
            sx={{
              bgcolor: "#151515",
              px: 3,
              py: 1,
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              {/* CLIENT NAME */}
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "#fff",
                  fontSize: "1rem",
                }}
              >
                {booking.name}
              </Typography>

              {/* SERVICE TAG */}
              <Chip
                label={booking.service}
                sx={{
                  bgcolor: "#D4AF37",
                  color: "#000",
                  fontWeight: "bold",
                }}
              />
            </Box>
          </AccordionSummary>

          {/* DETAILS */}
          <AccordionDetails
            sx={{
              bgcolor: "#111",
              px: 3,
              py: 2,
            }}
          >
            <Typography sx={{ mb: 1.5 }}>
              <strong>Date:</strong> {booking.date}
            </Typography>

            <Typography sx={{ mb: 1.5 }}>
              <strong>Time:</strong> {booking.time}
            </Typography>

            <Typography sx={{ mb: 1.5 }}>
              <strong>Type:</strong> {booking.type}
            </Typography>

            <Typography sx={{ mb: 1.5 }}>
              <strong>Phone:</strong> {booking.phone}
            </Typography>

            {/* CONDITIONAL ADDRESS */}
            {booking.type === "Home Service" && (
              <Typography sx={{ mb: 1.5 }}>
                <strong>Address:</strong> {booking.address}
              </Typography>
            )}

            {/* BOOKING ID */}
            <Typography
              sx={{
                color: "#777",
                mt: 3,
                fontSize: "0.85rem",
                wordBreak: "break-all",
              }}
            >
              Booking ID: {booking._id}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}