import React from 'react';
function Dp(props) {
  return(<>{(props.small)?<div >
      <img src={props.image} alt="" width="100%" />
  </div>:<div style={{width:"7rem"}}>
      <img src={props.image} alt="" width="100%" />
  </div>}
  </> );
}

export default Dp;
