import { useReducer, useEffect } from "react";
import photos from "mocks/photos";

// Define actions
const LIKE_PHOTO = 'like-photo';
const TOGGLE_MODAL = 'modal-toggle';
const SELECT_PHOTO = 'select-photo';
const SET_PHOTO_DATA = 'set-photo-data';



const initialState = {
  // Map mock photos
  photosLikes: [],
  likedCount: 0,
  isModalOpen: false,
  selectedPhoto: null,
  photoData: [],
  topicData: []
}



const reducer = (state, action) => {
  switch (action.type) {
    case LIKE_PHOTO:
      const { photoId } = action.payload;
      const likePhotoIndex = state.photosLikes.indexOf(photoId);
      let updatedPhotoLikes;
      let likedCount = state.likedCount;
      console.log(photoId)
      console.log(likePhotoIndex);
      if (likePhotoIndex === -1) {
        //photo not liked add to array
        updatedPhotoLikes = [...state.photosLikes, photoId];
        likedCount++;
      } else {
        //photo liked get it outta array!
        updatedPhotoLikes = state.photosLikes.filter(id => id !== photoId);
        likedCount--;
      }

      return {
        ...state,
        photosLikes: updatedPhotoLikes,
        likedCount: likedCount
      }

      // // First my usual like state update
      // const updatedPhotos = state.photosLikes.map((photo) => {
      //   if (photo.id === photoId) {
      //     return {
      //       ...photo,
      //       like: !photo.like
      //     };
      //   }
      //   return photo;
      // })
      // // filter for how many liked for likedCount state
      // const likedCount = updatedPhotos.filter(photo =>photo.like).length
      // return {
      //   ...state,
      //   photosLikes: updatedPhotos,
      //   likedCount: likedCount
      // };

    case TOGGLE_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
        selectedPhoto: action.payload
      };
    case SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload
      };
    case SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload
      }
    default:
      return state;
  }
};

const useApplicationData = () => {

  useEffect(() => {
    fetch('/api/photos')
      .then(res => res.json())
      .then((data) => {
        dispatch({
          type: SET_PHOTO_DATA,
          payload: data
        })
      })
  }, [])

  const [state, dispatch] = useReducer(reducer, initialState)


  // Helpers to pass down
  const updateToFavPhotoIds = (photoId) => {
    console.log("update fav");
    dispatch({
      type:  LIKE_PHOTO,
      payload: {
        photoId: photoId
      }
    });
  }

  const onClosePhotoDetailsModal = () => {
    dispatch({
      type: TOGGLE_MODAL
    })
  }

  const setPhotoSelected = (photoObj) => {
    dispatch({
      type: SELECT_PHOTO,
      payload: photoObj
    })
  }

  return {
    state,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    setPhotoSelected
  }
};

export default useApplicationData;