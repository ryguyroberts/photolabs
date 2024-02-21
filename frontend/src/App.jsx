import React from 'react';
import './App.scss';
import PhotoList from 'components/PhotoList';



// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };



// Note: Rendering a single component to build components in isolation
const App = () => {
  // for now just a iterating loop
  // const createPhotos = (loops) => {
  //   let photoArr = [];
  //   for (let i = 1; i <= loops; i++) {
  //     photoArr.push(<PhotoListItem key={i} photo={sampleDataForPhotoListItem}/>)
  //   }
  //   return photoArr;
  // }

  return (
    <div className="App">

      <PhotoList />
    </div>
  );
};

export default App;
