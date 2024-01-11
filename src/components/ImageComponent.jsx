// ImageComponent.jsx
import React from "react";

const ImageComponent = ({ data }) => {
  return (
    <div>
      {data.map((image) => (
        <div key={image.id} className="column">
          <img src={image.img} alt="" />
        </div>
      ))}
    </div>
  );
};

export default ImageComponent;
