import React from 'react';

function UploadButton() {
    const upload_file = async () => {
        try {
            const response = await window.electron.ipcRenderer.invoke('upload-start', "Hello World!");
            console.log('Response from python: ', response);
        } catch (err) {
            console.log("Error: ", err);
        }
    }

    return <a target="_blank" rel="noreferrer" onClick={upload_file}>Upload Audio File</a>
}

export default UploadButton