import React from 'react';
import PhotoList from 'components/PhotoList';
import '../styles/LikedPhotosModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const LikedPhotosModal = ({state, toggleLikedPhotosModal, updateToFavPhotoIds}) => {
  // Map only photos that are in the liked array

  const currentLiked = state.photosLikes;
  console.log(currentLiked);
  const onlyLikedPhotos = state.photoData.filter(photo => currentLiked.includes(photo.id.toString()));
  console.log(onlyLikedPhotos);

  return (
    // Main modal photo layout
    <div className="photos-liked-modal">
      <button onClick={() => {toggleLikedPhotosModal()}} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <h1>Liked Photos</h1>
    
      {/* Liked Photo List */}
      <ul>
        <PhotoList photos={onlyLikedPhotos} state={state} updateToFavPhotoIds={updateToFavPhotoIds}/>
      </ul> 
    </div>
  )
};

export default LikedPhotosModal;