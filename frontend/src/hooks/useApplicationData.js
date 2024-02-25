import { useReducer, useEffect } from "react";

// Define actions
const LIKE_PHOTO = 'like-photo';
const TOGGLE_MODAL = 'modal-toggle';
const SELECT_PHOTO = 'select-photo';
const SET_PHOTO_DATA = 'set-photo-data';
const SET_TOPIC_DATA = 'set-topic-data';
const SET_TOPIC_ID = 'set-photo-topic-data';



const initialState = {
  // Map mock photos
  photosLikes: [],
  likedCount: 0,
  isModalOpen: false,
  selectedPhoto: null,
  photoData: [],
  topicData: [],
  selectedTopicId: null
}



const reducer = (state, action) => {
  switch (action.type) {
    case LIKE_PHOTO:
      const { photoId } = action.payload;
      const likePhotoIndex = state.photosLikes.indexOf(photoId);
      let updatedPhotoLikes;
      let likedCount = state.likedCount;

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

    case SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload
      }

    case SET_TOPIC_ID:
      return {
        ...state,
        selectedTopicId: action.payload
      }
      
    default:
      return state;
  }
};

const useApplicationData = () => {


  const [state, dispatch] = useReducer(reducer, initialState)

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

  useEffect(() => {
    fetch('/api/topics')
      .then(res => res.json())
      .then((data) => {
        dispatch({
          type: SET_TOPIC_DATA,
          payload: data
        })
      })
  }, [])

  useEffect(() => {

    if(state.selectedTopicId) {
      fetch(`/api/topics/photos/${state.selectedTopicId}`)
      .then(res => res.json())
      .then((data) => {
        dispatch({
          type: SET_PHOTO_DATA,
          payload: data
        })
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      })
    }
  }, [state.selectedTopicId])


  // Helpers to pass down
  const updateToFavPhotoIds = (photoId) => {
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

  const setPhotosTopic = (topicId) => {
    dispatch({
      type: SET_TOPIC_ID,
      payload: topicId
    })
    }

  return {
    state,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    setPhotoSelected,
    setPhotosTopic 
  }
};

export default useApplicationData;