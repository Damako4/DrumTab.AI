import React from "react";
import { useState, useEffect } from "react";
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'

function ProgressPage() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        window.electron.ipcRenderer.on('upload-progress', (event, newProgress) => {
            setProgress(newProgress);
        });

        return () => {
            window.electron.ipcRenderer.removeAllListeners('upload-progress');
        }
    }, [])

    return (
      <>
        <Box sx={{ maxWidth: 640, mx: 'auto', p: 3 }}>
          <Typography variant="h5" gutterBottom>Progress</Typography>
          <LinearProgress variant="determinate" value={progress} sx={{ borderRadius: 8, height: 10 }} />
          <Typography variant="body2" sx={{ mt: 1 }}>{Math.round(progress)}%</Typography>
        </Box>
      </>
    )
}

export default ProgressPage;