'use client';

import React from 'react';
import { Container, Box } from '@mui/material';
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <Container maxWidth="sm">
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      height="100vh"
    >
      <LoginForm />
    </Box>
  </Container>
  );
}
