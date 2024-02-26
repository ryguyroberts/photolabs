import { useReducer, useEffect } from "react";

// Define actions
const LIKE_PHOTO = 'like-photo';
const TOGGLE_MODAL = 'modal-toggle';
const SELECT_PHOTO = 'select-photo';
const SET_PHOTO_DATA = 'set-photo-data';
const SET_TOPIC_DATA = 'set-topic-data';
const SET_TOPIC_ID = 'set-photo-topic-data';
const INITIALIZE_LIKED_PHOTOS = 'initialize-liked-photos';


// Set my initial states
const initialState = {
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

    case INITIALIZE_LIKED_PHOTOS:
      const likedPhotos = JSON.parse(localStorage.getItem('likedPhotos'));
      if (likedPhotos) {
        return {
          ...state,
          photosLikes: likedPhotos,
          likedCount: likedPhotos.length
        }
      }
  
    // Toggle modal state true/false (open/close)
    case TOGGLE_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
        selectedPhoto: action.payload
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
    // Fetch to both APIs
    Promise.all([fetch('/api/photos'), fetch('/api/topics')])
      .then(responses => Promise.all(responses.map(res => res.json())))
      // set data in the state
      .then(([photosData, topicsData]) => {
        dispatch({
          type: SET_PHOTO_DATA,
          payload: photosData
        });
        dispatch({
          type: SET_TOPIC_DATA,
          payload: topicsData
        });
        dispatch({ type: INITIALIZE_LIKED_PHOTOS });
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });

     
  }, []); // Run once on component load

  // Side effect that watches for topic ID change
  useEffect(() => {
    // Get request to with corresponding topic id.
    if(state.selectedTopicId) {
      fetch(`/api/topics/photos/${state.selectedTopicId}`)
      .then(res => res.json())
      // same dispatch as initial photo data setup, replaces photos with filtered list
      .then((data) => {
        dispatch({
          type: SET_PHOTO_DATA,
          payload: data
        })
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      })
    };
  }, [state.selectedTopicId]) // Reload when topic id state gets set (user clicking topic button).




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

  return {
    state,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    setPhotoSelected,
    setPhotosTopic 
  };
};

export default useApplicationData;