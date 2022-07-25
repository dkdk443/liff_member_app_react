import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Liff from './App';
import liff from '@line/liff/dist/lib';

export type Profile = {
  lineUserId: string;
  lineDisplayName: string;
};

let liffId = process.env.REACT_APP_LIFF_ID
console.log(process.env);

let profile: Profile = { 'lineUserId': '', 'lineDisplayName': '' };

liff
.init({
  liffId: liffId || '',
  withLoginOnExternalBrowser: true
})
.then(() => {
  liff
    .getProfile()
    .then((result) => {
      profile.lineUserId = result.userId;
      profile.lineDisplayName = result.displayName;
      ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
        <React.StrictMode>
          <Liff profile={ profile } />
        </React.StrictMode>
      )
    })
})
.catch((e) => {
  alert(`LIFF error: ${e.message}`)
});
