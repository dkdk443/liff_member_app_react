import { useState, useEffect } from 'react'
import './App.css'
import { useQRCode } from 'next-qrcode';
import axios from 'axios';

const App = (props: any) => {
  const lineUserId = props.profile.lineUserId;
  const [memberId, setMemberId] = useState('');
  const endpointUrl = `https://liff-member-api-laravel.herokuapp.com/api/memberId`;
  useEffect(() => {
    axios
      .post(endpointUrl, {
        'line_user_id': lineUserId
        }
      ).then(resp => {
        setMemberId(resp.data.results.member_id);
      }).catch(error => {
        alert(JSON.stringify(error));
        console.log(error);
      })
  });
  // const lineDisplayName = props.profile.lineDisplayName;
  const { Canvas } = useQRCode();
  return (
    <div className="App">
      <div className="card">
        <Canvas
          text={ memberId }
          options={{
            type: 'image/jpeg',
            quality: 0.3,
            level: 'M',
            margin: 3,
            scale: 4,
            width: 260,
            color: {
              dark: '#010599FF',
              light: '#FFF',
            },
          }}
        />
        <p>{memberId}</p>
      </div>
    </div>
  )
}

export default App
