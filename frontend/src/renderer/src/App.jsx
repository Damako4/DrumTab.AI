import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import logo from './assets/icon.svg'
import UploadButton from './components/UploadButton'

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.invoke('upload-start',  ['Hello World']).then((result) => {

  })

  return (
    <>
      <img alt="logo" className="logo" src={logo} />
      <div className="text">
        DrumTab<span className="react">.AI</span>
      </div>
      <p className="tip">
        Created by Damir Fell
      </p>
      <div className="actions">
        <div className="action">
          <UploadButton />
        </div>
      </div>
      <Versions></Versions>
    </>
  )
}

export default App
