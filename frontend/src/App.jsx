import React, { useReducer, useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from './mocks/photos'
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// initialState 
const initialState = {
  // Map mock photos
  photos: photos.map((photo) => ({id: photo.id, like: false })),
  likedCount: 0,
  isModalOpen: false,
  selectedPhoto: null
}

// reducer Function
// a newer BOLDER reducer
const reducer = (state, action) => {
  if (action.type === 'like-photo') {
    const { photoId } = action.payload;
    // First my usual like state update
    const updatedPhotos = state.photos.map((photo) => {
      if (photo.id === photoId) {
        return {
          ...photo,
          like: !photo.like
        };
      }
      return photo;
    })
    // filter for how many liked for likedCount state
    const likedCount = updatedPhotos.filter(photo =>photo.like).length
    return {
      ...state,
      photos: updatedPhotos,
      likedCount: likedCount
    }
  }
  // set module state open and close
  if (action.type === 'modal-toggle') {
    return {
      ...state,
      isModalOpen: !state.isModalOpen,
      selectedPhoto: action.payload
    }
  }
  return state;
};

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // Helpers to pass down
  const setLikeHandler = (photoId) => {
    dispatch({
      type: 'like-photo',
      payload: {
        photoId: photoId
      }
    });
  }

  const toggleModal = (photoObj) => {
    console.log();
    dispatch({
      type: 'modal-toggle',
      payload: photoObj
    })
  }

  return (
    <div className="App">
      <HomeRoute setLikeHandler={setLikeHandler} state={state} photos={photos} topics={topics} toggleModal={toggleModal}/>
      {state.isModalOpen && <PhotoDetailsModal toggleModal={toggleModal} photos={photos} state={state}/>}
    </div>
  );
};

export default App;
