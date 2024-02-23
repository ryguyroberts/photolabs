import React from 'react';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({toggleModal, state, setLikeHandler, photos}) => {

  const photo = state.selectedPhoto


  return (
    <div className="photo-details-modal">
      <button onClick={() => {toggleModal()}} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className='photo-details-modal__images'>
        <PhotoFavButton setLikeHandler={setLikeHandler} photo={photo} state={state} />
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
      <ul className='photo-details-modal__top-bar'>
          <PhotoList photos={Object.values(photo.similar_photos)} setLikeHandler={setLikeHandler} state={state}/>
        </ul> 
    </div>
  )
};

export default PhotoDetailsModal;


{/* <div id={id} className="photo-list__item" >
<PhotoFavButton setLikeHandler={setLikeHandler} photo={photo} state={state}/>
<img onClick={() => {toggleModal(photo)}} className="photo-list__image" src={regularUrl}/>
<div className="photo-list__user-details">
  <img className="photo-list__user-profile" src={profile}/>
    <div className="photo-list__user-info">
      {username}
      <br />
      <span className="photo-list__user-location">
        {city}, {country}
      </span>
    </div>
</div>
</div> */}