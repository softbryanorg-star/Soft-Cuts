import React from "react";
import { Box, Typography, Container, Button, Tooltip } from "@mui/material";
import { FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <Box className="footer">
      <Container className="footer-container">
        {/* LEFT SIDE */}
        <Box className="footer-left">
          <img
            src="/images/logo.png"
            alt="Soft Cuts Logo"
            className="footer-logo"
            onError={(e) => { e.target.onerror = null; e.target.src = "/images/about.jpg"; }}
          />
          <Box className="footer-info">
            <Typography className="footer-name">
              Soft Cuts Stylist Salon
            </Typography>
            <Typography className="footer-text">
              No. 12 Wetheral Road, Owerri, Imo State, Nigeria
            </Typography>
            <Typography className="footer-text">
              Call : +2347025404516
            </Typography>
          </Box>
        </Box>

        {/* RIGHT SIDE */}
        <Box className="footer-right">
          <Button
            variant="contained"
            color="warning"
            className="restricted-btn"
            href="/admin/login"
          >
            Restricted
          </Button>

          <Box className="footer-socials">
            <Tooltip title="Follow us on Instagram" arrow>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="social-icon">
                <FaInstagram size={24} />
              </a>
            </Tooltip>

            <Tooltip title="Follow us on TikTok" arrow>
              <a href="http://tiktok.com/" target="_blank" rel="noreferrer" className="social-icon">
                <FaTiktok size={24} />
              </a>
            </Tooltip>

            <Tooltip title="Email us" arrow>
              <a href="mailto:softbryan.org@gmail.com" className="social-icon">
                <FaEnvelope size={24} />
              </a>
            </Tooltip>
          </Box>
        </Box>
      </Container>

      <Typography className="footer-bottom">
        © {new Date().getFullYear()} Soft Cuts Stylist Salon.
      </Typography>
    </Box>
  );
}