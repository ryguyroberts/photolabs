import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({photo, state, updateToFavPhotoIds}) {

  // Onclick update photoslikes state array with ID
  return (
    <div onClick={() => {updateToFavPhotoIds(photo.id)}} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={state.photosLikes.includes(photo.id)}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;