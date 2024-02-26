import { useReducer, useEffect } from "react";

// Define actions
const LIKE_PHOTO = 'like-photo';
const TOGGLE_MODAL = 'modal-toggle';
const SELECT_PHOTO = 'select-photo';
const SET_PHOTO_DATA = 'set-photo-data';
const SET_TOPIC_DATA = 'set-topic-data';
const SET_TOPIC_ID = 'set-photo-topic-data';
const TOGGLE_LIKED_MODAL ='modal-liked-toggle';


// Set my initial states
const likedPhotos = JSON.parse(localStorage.getItem('likedPhotos')) || [];
const initialState = {
  photosLikes: likedPhotos || [],
  likedCount: likedPhotos.length,
  isModalOpen: false,
  isLikedModalOpen: false,
  selectedPhoto: null,
  photoData: [],
  topicData: [],
  selectedTopicId: JSON.parse(localStorage.getItem('topicId')) || null
}


// One reducer to rule them all.
const reducer = (state, action) => {

  switch (action.type) {
   
    // update photoslikes array if photo ID not inside, remove if inside
    case LIKE_PHOTO:
      const { photoId } = action.payload;
      const likePhotoIndex = state.photosLikes.indexOf(photoId);
      let updatedPhotoLikes;
      // Keep track of amount of likes 
      let likedCount = state.likedCount;

      if (likePhotoIndex === -1) {
        //photo not liked add to array\
        updatedPhotoLikes = [...state.photosLikes, photoId];
        likedCount++;
      } else {
        //photo liked get it outta array!
        updatedPhotoLikes = state.photosLikes.filter(id => id !== photoId);
        likedCount--;
      };

      // Set local browser for likes to persist between refresh
      localStorage.setItem('likedPhotos', JSON.stringify(updatedPhotoLikes));
         
      return {
        ...state,
        photosLikes: updatedPhotoLikes,
        likedCount: likedCount
      };

 
    // Toggle modal state true/false (open/close)
    case TOGGLE_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };

    // Toggle modal for liked photos true/false
    case TOGGLE_LIKED_MODAL:
      return {
        ...state,
        isLikedModalOpen: !state.isLikedModalOpen
      };

    // set selected photo state to whole photo obj
    case SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload
      };

    // initial photo data load
    case SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload
      };

    // initial topic data load
    case SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload
      };

    // set topic id state to know what Get request to make
    case SET_TOPIC_ID:
      // Set topic ID in local storage for refresh
      localStorage.setItem('topicId', JSON.stringify(action.payload));

      return {
        ...state,
        selectedTopicId: action.payload
      };
      
    default:
      return state;
  };
};

const useApplicationData = () => {


  const [state, dispatch] = useReducer(reducer, initialState)

  // Initial data load side effect
  useEffect(() => {
    // Fetch topics and initial photo data at same time
    Promise.all([
      fetch('/api/topics').then(response => response.json()),
      fetch('/api/photos').then(response => response.json())
    ])
      .then(([topicsData, photosData]) => {
        dispatch({
          type: SET_TOPIC_DATA,
          payload: topicsData
        });

        // Check if a topic is already selected 
        if (state.selectedTopicId === null) {
          dispatch({
            type: SET_PHOTO_DATA,
            payload: photosData
          });
        }
      })
      .catch(error => {
        console.error("Error fetching initial data:", error);
      });
  }, []); // Run on Initial load only

  // Side effect that watches for topic ID change
  useEffect(() => {
    // Generic fetchdata for both URL requests
    const fetchData = (url) => {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          dispatch({
            type: SET_PHOTO_DATA,
            payload: data
          });
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    };
  
    if (state.selectedTopicId !== null) {
      // If topic ID is selected, fetch data for that topic
      fetchData(`/api/topics/photos/${state.selectedTopicId}`);
    } else {
      // If no topic ID is selected, fetch regular photo data
      fetchData('/api/photos');
    }
}, [state.selectedTopicId]);

  // Helpers that use reducer

  // Update the photosLikes state array
  const updateToFavPhotoIds = (photoId) => {
    dispatch({
      type:  LIKE_PHOTO,
      payload: {
        photoId: photoId
      }
    });
  };

  // Open/close Modal
  const onClosePhotoDetailsModal = () => {
    dispatch({
      type: TOGGLE_MODAL
    });
  };

  // Set photo obj state when modal opened
  const setPhotoSelected = (photoObj) => {
    dispatch({
      type: SELECT_PHOTO,
      payload: photoObj
    });
  };

  // Set topic id state when clicking topic button
  const setPhotosTopic = (topicId) => {
    dispatch({
      type: SET_TOPIC_ID,
      payload: topicId
    });
  };

  // Toggle liked photos
  const toggleLikedPhotosModal = () => {
    dispatch({
      type: TOGGLE_LIKED_MODAL
    });
  };

  return {
    state,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    setPhotoSelected,
    setPhotosTopic,
    toggleLikedPhotosModal
  };
};

export default useApplicationData;