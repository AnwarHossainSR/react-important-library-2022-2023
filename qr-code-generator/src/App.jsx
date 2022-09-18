import QRCode from 'qrcode.react';
import React, { useRef, useState } from 'react';
import './App.css';
const App = () => {
  const [value, setvalue] = useState(null);
  const ref = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    setvalue(ref.current.value);
  };
  const handleDownload = () => {
    const qrCOdeURL = document
      .getElementById('qrCodeQl')
      .toDataURL()
      .replace('image/png', 'image/octet-stream');
    let a = document.createElement('a');
    a.href = qrCOdeURL;
    a.download = 'qrCode.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return (
    <div className='parent_div'>
      <div className='child_div'>
        <h1>React QRCode</h1>
        <div className='input_group'>
          <form onClick={handleClick}>
            <input
              type='text'
              className='form-control'
              ref={ref}
              placeholder='Enter qr code'
            />
            <button>Generate</button>
          </form>
        </div>
        {value && (
          <div className='qrcode-container'>
            <div className='qr_code'>
              <QRCode value={value} id='qrCodeQl' size={200} />
            </div>
            <button onClick={handleDownload}>Download</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
