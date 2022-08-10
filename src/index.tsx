import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Liff from './App';
import liff from '@line/liff/dist/lib';
import { BrowserRouter } from "react-router-dom";
import LIFFInspectorPlugin from '@line/liff-inspector/dist';

liff.use(new LIFFInspectorPlugin({ origin: 'wss://4c84-58-183-225-83.jp.ngrok.io' }));

export type Profile = {
  lineUserId: string;
  lineDisplayName: string;
  linePictureUrl?: string;
};

let liffId = process.env.REACT_APP_LIFF_ID
console.log(process.env);

let profile: Profile = { 'lineUserId': '', 'lineDisplayName': '', 'linePictureUrl': '' };

if (liff.isInClient()) {
  liff
  .init({
    liffId: liffId || '',
    // withLoginOnExternalBrowser: true
  })
  .then(() => {
    alert('liff is init');
    liff
      .getProfile()
      .then((result) => {
        profile.lineUserId = result.userId;
        profile.lineDisplayName = result.displayName;
        profile.linePictureUrl = result.pictureUrl;
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
} else {
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <React.StrictMode>
        <BrowserRouter>
          <Liff profile={profile} />
        </BrowserRouter>
      </React.StrictMode>
    )
}
