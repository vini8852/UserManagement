'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  Box, Button, Grid, TextField, Typography, Stack
} from '@mui/material';
import { useRouter } from 'next/router';

type LoginFormInputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
    const router = useRouter();
  const { register, handleSubmit, formState: { errors }, setError,reset } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Login failed');

      const result = await res.json();
      router.push('/');
      console.log('Login successful:', result);

    } catch (error) {
         setError('email', {
        type: 'manual',
        message: 'Invalid email or password',
      });
      setError('password', {
        type: 'manual',
        message: 'Invalid email or password',
      });
      console.error('Login error:', error);
    }
  };

  return (
<form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Typography variant="h4" align="center">Login</Typography>

        <TextField
          label="Email"
          fullWidth
          {...register('email', { required: 'Email is required', pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'Enter a valid email',
          } })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          {...register('password', { required: 'Password is required' })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

<Grid container spacing={2}>
<Grid size={6}>
            <Button type="submit" variant="contained" fullWidth>Login</Button>
            </Grid>
            <Grid size={6}>
            <Button type="button" variant="outlined" onClick={() => reset()} fullWidth>Cancel</Button>
            </Grid>
</Grid>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Login via OTP
        </Button>
      </Stack>
    </form>
  );
}
