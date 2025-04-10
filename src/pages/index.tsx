"use client";

import React, { useState } from "react";
import { Box, Typography, Paper } from "@mui/material";

export default function HomePage() {
  const [userName] = useState("John");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        padding: 2,
        backgroundColor: "#f4f6f8",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          borderRadius: 2,
          textAlign: "center",
          maxWidth: 400,
          width: "100%",
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Welcome, {userName}!
        </Typography>
        <Typography variant="body1" color="text.secondary">
          You are now logged in. Explore users, technologies, courses, or view
          reports using the navbar.
        </Typography>
      </Paper>
    </Box>
  );
}
