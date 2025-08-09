import React from "react";
import { useState, useEffect } from "react";

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

    return (<>
        <div className="text">
            Progress
        </div>
        <progress value={progress} max={100} />
    </>
    )
}

export default ProgressPage;