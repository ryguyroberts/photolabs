import { useReducer } from "react";
import photos from "mocks/photos";

// Define actions
const LIKE_PHOTO = 'like-photo';
const TOGGLE_MODAL = 'modal-toggle';
const SELECT_PHOTO = 'select-photo';



const initialState = {
  // Map mock photos
  photos: photos.map((photo) => ({id: photo.id, like: false })),
  likedCount: 0,
  isModalOpen: false,
  selectedPhoto: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case LIKE_PHOTO:
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
      };
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
    default:
      return state;
  }
};

const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState)
  // const [isModalOpen, setIsModalOpen] = useState(false);

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
  return [
    state,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    setPhotoSelected
  ]
};

export default useApplicationData;