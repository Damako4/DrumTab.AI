import React from 'react';
import Button from '@mui/material/Button';
import AudioFileIcon from '@mui/icons-material/AudioFile';


function UploadButton() {
    const upload_file = async () => {
        try {
            const response = await window.electron.ipcRenderer.invoke('upload-start', "Hello World!");
            console.log('Response from python: ', response);
        } catch (err) {
            console.log("Error: ", err);
        }
    }

    return <Button startIcon={<AudioFileIcon />} variant="contained" color="primary" onClick={upload_file}>Upload Audio File</Button>
}

export default UploadButton