import './App.css'

const Mypage = (props: any) => {
  console.log(props.props.profile);
  const lineDisplayName = props.props.profile.lineDisplayName;
  const linePictureUrl = props.props.profile.linePictureUrl;
  return (
    <div className="App">
      <div className="header">
        <div className="header_logo">DEMO JIM</div>
        <div className="header_text">マイページ</div>
        <div className="profile">
          <img className='icon-image' src={linePictureUrl ? linePictureUrl : "https://img.freepik.com/free-photo/teenager-in-a-cap-and-glasses-portrait-closeup_1321-3310.jpg?w=826&t=st=1660132189~exp=1660132789~hmac=4c4c77079e6b9b6f0cb9e670f8cf141dd3f08fa7a5edf948a9cb77e551dd9049"} alt="" />
          <div className="profile-name">{ lineDisplayName ? lineDisplayName : 'ゲストさん' }</div>
        </div>
      </div>
    </div>
  );
}
export default Mypage
