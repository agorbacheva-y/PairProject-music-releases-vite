import data from "./data.json";
import Album from "./components/Album/Album";
import Header from "./components/Header";

import "./App.css";

//Exporting App.jsx 
export const App = () => {
  const albumData = data.albums.items; //Extracting album data

  // Rendering JSX. Map and key.
  return (
    <>
      <Header />
      <Album albumData={albumData}/>
    </>
   
  );
};
