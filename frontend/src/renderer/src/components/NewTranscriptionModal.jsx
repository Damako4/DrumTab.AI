import React from 'react';
import { Modal, Paper, Stack, Typography, Button, Box, TextField } from '@mui/material'
import UploadButton from './UploadButton';

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
          display: 'flex',
          flexDirection: 'column',
          p: 3,
          borderRadius: 2,
          outline: 'none',
          '&:focus': { outline: 'none' },
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          Create New Transcription
        </Typography>

        <Box
          component="form"
          onSubmit={(e) => { e.preventDefault(); onCreate?.() }}
          sx={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}
        >
          <Stack spacing={2} sx={{ flex: 1, overflow: 'auto', alignItems: 'center', justifyContent: 'center' }}>
            <UploadButton />
          </Stack>

          <Box sx={{ mt: 'auto', pt: 1, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
            <Button variant="contained" onClick={onClose}>Cancel</Button>
            <Button type="submit" variant="contained">Next</Button>
          </Box>
        </Box>
      </Paper>
    </Modal>
  );
}