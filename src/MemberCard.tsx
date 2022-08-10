import React from 'react';
import { useState, useEffect } from 'react'
import './App.css'
import { useQRCode } from 'next-qrcode';
import axios from 'axios';
import Barcode from './components/barcode';
import { Loading } from './components/loading';
import { Link } from "react-router-dom";

const MemberCard = (props: any) => {
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
  if (memberId) {
    return (
      <div className="App">
        <div className="header">
          <div className="header__title">
            <div className="header_logo">DEMO JIM</div>
            <div className="header_text">WEB会員証</div>
          </div>
          <div className="header__button">
            <Link to="/mypage">マイページ</Link>
          </div>
        </div>
          <div className="card">
            <Barcode memberId={ memberId }></Barcode>
            <Canvas
              text={ memberId ? memberId : 'ABC' }
              options={{
                type: 'image/jpeg',
                quality: 0.3,
                level: 'M',
                margin: 3,
                scale: 4,
                width: 160,
                color: {
                  dark: '#010599FF',
                  light: '#FFF',
                },
              }}
            />
            <p className="detail">{ memberId }</p>
          </div>
      </div>
    )
  } else {
    return (
      <div className="App">
        <div className="header">
          <div className="header_logo">DEMO JIM</div>
          <div className="header_text">WEB会員証</div>
        </div>
        <div className="loading">
          <Loading />
        </div>
      </div>
    );
  }
}

export default MemberCard;
