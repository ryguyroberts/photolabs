import React, { useReducer } from 'react';
import './App.scss';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';

// initialState 
const initialState = {
  photos: [
    { id: "1", like: false },
    { id: "2", like: false },
    { id: "3", like: false },
  ]
}

// reducer Function

const reducer = (state, action) => {
  if (action.type === 'like-photo') {
    const { photoId } = action.payload;
    return {
      ...state,
        photos: state.photos.map((photo) => {
          if (photo.id === photoId) {
            return {
              ...photo,
              like: !photo.like
            };
          }
          return photo;
        })
    }
  }
  return state;
};


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
      <TopicList />
      <PhotoList setLikeHandler={setLikeHandler} state={state}/>
    </div>
  );
};

export default App;
