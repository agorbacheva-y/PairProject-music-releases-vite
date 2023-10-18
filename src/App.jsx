import { useState, useEffect } from "react";
import data from "./data.json";
import Album from "./components/Album/Album";
import Header from "./components/Header";

console.log(data);

export const App = () => {
  const [ albumData, setAlbumData ] = useState([]);

  useEffect(() => {
    setAlbumData(data.albums.items);
  },[])

  return (
    <>
      <Header />
      <Album albumData={albumData}/>
    </>
   
  );
};
