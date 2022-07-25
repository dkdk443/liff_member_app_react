// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import { useQRCode } from 'next-qrcode';

const App = (props: any) => {
  const lineUserId = props.profile.lineUserId;
  alert(lineUserId);
  // const lineDisplayName = props.profile.lineDisplayName;
  const { Canvas } = useQRCode();
  return (
    <div className="App">
      <div className="card">
        <Canvas
          text={'ここに会員番号を渡す'}
          options={{
            type: 'image/jpeg',
            quality: 0.3,
            level: 'M',
            margin: 3,
            scale: 4,
            width: 240,
            color: {
              dark: '#010599FF',
              light: '#FFF',
            },
          }}
      />
      </div>
    </div>
  )
}

export default App
