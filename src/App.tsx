import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import { Loading } from './components/loading';
import { Routes, Route} from "react-router-dom";
import Mypage from './Mypage';
import MemberCard from './MemberCard';

const App = (props: any) => {
  const lineUserId = props.profile.lineUserId;
  // const lineUserId = 'AAAAAAAAAAAA';
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

  if (memberId) {
    return (
      <div className="container">
        <Routes>
          <Route path="/" element={<MemberCard props={props} />} />
          <Route path="mypage" element={<Mypage props={props} />} />
        </Routes>
      </div>
    )
  } else {
    return (
      <div className="App">
        <div className="header">
          <div className="header__title">
            <div className="header_logo">DEMO JIM</div>
            <div className="header_text">WEB会員証</div>
          </div>
          <div className="header__button">
          </div>
        </div>
        <div className="loading">
          <Loading />
        </div>
      </div>
    );
  }
}

export default App
