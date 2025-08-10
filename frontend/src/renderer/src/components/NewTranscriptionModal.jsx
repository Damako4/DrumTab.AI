import React from 'react';
import { Modal, Paper, Stack, Typography, Button, Box, TextField } from '@mui/material'

export default function NewTranscriptionModal({ open, onClose, onCreate }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Paper
        elevation={12}
        sx={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '50vw',
          height: '50vh',
          p: 3,
          borderRadius: 2,
          outline: 'none',               // remove focus outline
          '&:focus': { outline: 'none' }, // extra safety
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          Create New Transcription
        </Typography>

        <Box component="form" onSubmit={(e) => { e.preventDefault(); onCreate?.() }}>
          <Stack spacing={2}>
            <TextField
              label="File Name"
              variant="outlined"
              fullWidth
              autoFocus
            />
            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Button variant="outlined" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" variant="contained">
                Create
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Paper>
    </Modal>
  );
}