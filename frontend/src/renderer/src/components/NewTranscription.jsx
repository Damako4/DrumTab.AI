import React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

function NewTranscription({ onClick }) {
  return (
    <Grid item xs={6} sm={4} md={3} lg={2} xl={2} onClick={onClick} style={{ cursor: 'pointer' }}>
            <Card
              variant="outlined"
              sx={{
                height: 140,
                display: 'flex',
                aspectRatio: '8 / 10',
                alignItems: 'center',
                justifyContent: 'center',
                borderStyle: 'dashed',
                borderWidth: 3,
                cursor: 'pointer',
                borderRadius: 1,
                background: 'none',
                padding: 2,
              }}
              aria-label="Add new file"
              title="Add new file"
            >
              <Stack alignItems="center" spacing={1}>
                <AddRoundedIcon fontSize="large" color="action" />
                <Typography variant="body2" color="text.secondary">
                  New file
                </Typography>
              </Stack>
            </Card>
          </Grid>
  )
}
export default NewTranscription;