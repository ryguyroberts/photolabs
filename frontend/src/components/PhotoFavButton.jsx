import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({photo, state, setLikeHandler}) {

  // the PHOTO id in the handler
  return (
    <div onClick={() => {setLikeHandler(photo.id)}} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={state.photos[photo.id -1].like}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;