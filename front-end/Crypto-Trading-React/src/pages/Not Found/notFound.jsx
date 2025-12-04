import React from 'react'

function NotFound() {
  return (
    <div>
      <div className='font-bold'>We are sorry, the coin you are searching for does not exist, or at least hasn't since last time we checked</div>
      <img src="/imgs/sad-face.gif" alt="sad cat face" />
    </div>
  );
}

export default NotFound