// App.jsx
import React from "react";
import "./App.css";
import Header from "./components/Header";
import ImageComponent from "./components/ImageComponent";
import GallaryFooter from "./components/GallaryFooter";
import lake from "./image/lake.JPG"; // Import the lake variable

const imageData = [
  {
    id: 1,
    img: lake,
  },
  {
    id: 2,
    img: lake,
  },
  {
    id: 3,
    img: lake,
  },
  {
    id: 4,
    img: lake,
  },
];

function App() {
  return (
    <div>
      <Header />
      <ImageComponent data={imageData} />
      <GallaryFooter />
    </div>
  );
}

export default App;
