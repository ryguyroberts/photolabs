import React, { useReducer } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from './mocks/photos'
import topics from 'mocks/topics';

// initialState 
const initialState = {
  photos: [
    { id: "1", like: false },
    { id: "2", like: false },
    { id: "3", like: false },
    { id: "4", like: false },
    { id: "5", like: false },
    { id: "6", like: false },
    { id: "7", like: false },
    { id: "8", like: false },
    { id: "9", like: false },
    { id: "10", like: false },
  ],
  likedCount: 0
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
  return state;
};


// old reducer
// const reducer = (state, action) => {
//   if (action.type === 'like-photo') {
//     const { photoId } = action.payload;
//     return {
//       ...state,
//         photos: state.photos.map((photo) => {
//           if (photo.id === photoId) {
//             return {
//               ...photo,
//               like: !photo.like
//             };
//           }
//           return photo;
//         })
//     }
//   }
//   return state;
// };


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // Helpers to pass down
  const setLikeHandler = (photoId) => {
    dispatch({
      type: 'like-photo',
      payload: {
        photoId: photoId
      }
    });
  }


  return (
    <div className="App">
      <HomeRoute setLikeHandler={setLikeHandler} state={state} photos={photos} topics={topics}/>
    </div>
  );
};

export default App;
