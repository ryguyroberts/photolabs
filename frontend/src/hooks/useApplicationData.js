import { useReducer } from "react";
import photos from "mocks/photos";

const initialState = {
  // Map mock photos
  photos: photos.map((photo) => ({id: photo.id, like: false })),
  likedCount: 0,
  isModalOpen: false,
  selectedPhoto: null
}

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

const useApplicationData = () => {

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

  return [
    state,
    setLikeHandler,
    toggleModal
  ]
};

export default useApplicationData;