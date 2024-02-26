import React from 'react';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({state, onClosePhotoDetailsModal, updateToFavPhotoIds}) => {

  const photo = state.selectedPhoto;


  return (
    // Main modal photo layout
    <div className="photo-details-modal">
      <button onClick={() => {onClosePhotoDetailsModal()}} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className='photo-details-modal__images'>
        <PhotoFavButton updateToFavPhotoIds={updateToFavPhotoIds} photo={photo} state={state} />
        <img className="photo-details-modal__image" src={photo.urls.full}/>
        <div className='photo-details-modal__photographer-details'> 
          <img className='photo-details-modal__photographer-profile' src={photo.user.profile}/>
          <div className="photo-details-modal__photographer-info">
            {photo.user.username}
            <br />
            <span className='photo-details-modal__photographer-location'>
              {photo.location.city}, {photo.location.country}
            </span>
          </div>
        </div>
        <span className='photo-details-modal__header'>
          <br />
          Similiar Photos
        </span>  
      </div>
      {/* similiar photos list */}
      <ul className='photo-details-modal__top-bar'>
          <PhotoList photos={Object.values(photo.similar_photos)} updateToFavPhotoIds={updateToFavPhotoIds} state={state}/>
        </ul> 
    </div>
  )
};

export default PhotoDetailsModal;