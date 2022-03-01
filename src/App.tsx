
import qrCode from "./assets/image-qr-code.png";

import './App.scss';

export function App() {

  return (
    <div>
      <img src={qrCode} />
      <h1>Improve your front-end skills by building projects</h1>
      <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
  )
}
