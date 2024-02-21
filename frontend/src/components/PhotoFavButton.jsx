import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  let [like, setLike] = useState(false);
    
  const clickHandler = () => {
    setLike(prevLike => !prevLike)
  ;}

  return (
    <div onClick={clickHandler} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={like}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;