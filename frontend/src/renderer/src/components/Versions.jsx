import { useState } from 'react'

function Versions() {
  const version = "0.0.1";

  return (
    <ul className="versions">
      <li className="electron-version">DrumTab.AI {version}</li>
    </ul>
  )
}

export default Versions
