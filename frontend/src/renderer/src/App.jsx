import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined'
import NewTranscription from './components/NewTranscription'
import Divider from '@mui/material/Divider'
import NewTranscriptionModal from './components/NewTranscriptionModal'
import React, { useState } from 'react'

function App() {
  const [newFile, setNewFile] = useState(false);
  return (
    <>
      <Divider flexItem variant='middle' sx={{ my: 2 }} >Transcriptions</Divider>
      <Box sx={{ flexGrow: 1, width: '100%', p: 2, mt: -2}}>
        <Grid container spacing={2} alignItems="flex-start" justifyContent="flex-start">
          <NewTranscription onClick={() => {
            console.log('New transcription clicked');
            setNewFile(true);
          }} />
          {/* ...add more items later; grid will fill to the right... */}
        </Grid>
      </Box>
      <NewTranscriptionModal
        open={newFile}
        onClose={() => setNewFile(false)}
        onCreate={() => {
          // Handle create action
          setNewFile(false);
        }}
      />
    </>
  )
}

export default App
