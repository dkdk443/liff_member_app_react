import { useState, useEffect } from 'react'
import './App.css'
import { useQRCode } from 'next-qrcode';
import { useBarcode } from 'next-barcode';
import axios from 'axios';

const App = (props: any) => {
  // const lineUserId = props.profile.lineUserId;
  const lineUserId = 'AAAAAAAAAAAA';
  const [memberId, setMemberId] = useState('');
  const endpointUrl = `https://liff-member-api-laravel.herokuapp.com/api/memberId`;
  useEffect(() => {
    axios
      .post(endpointUrl, {
        'line_user_id': lineUserId
        }
    ).then(resp => {
      // alert(JSON.stringify(resp));
      setMemberId(resp.data.results.member_id);
    })
    .catch(error => {
      console.log(error);
    })
  });
  // const lineDisplayName = props.profile.lineDisplayName;
  const { Canvas } = useQRCode();
  const { inputRef } = useBarcode({
    value: 'next-barcode',
    options: {
      displayValue: false,
      background: '#ffc0cb',
    }
  });
  if (memberId) {
    return (
      <div className="App">
        <div className="header">
          WEB会員証
        </div>
        <div className="container">

          <div className="card">
            <img ref={inputRef} />
            <Canvas
              text={ memberId ? memberId : 'ABC' }
              options={{
                type: 'image/jpeg',
                quality: 0.3,
                level: 'M',
                margin: 3,
                scale: 4,
                width: 220,
                color: {
                  dark: '#010599FF',
                  light: '#FFF',
                },
              }}
            />
            <p className="detail">{memberId}</p>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="App">
        <div className="header">
          WEB会員証
        </div>
        <div className="container">
          <div className="loading">読み込み中・・・</div>
        </div>
      </div>
    );
  }
}

export default App
