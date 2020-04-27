import React from 'react';

const ImageToggle = ({ primaryImg, secondaryImg }) => {
  const imgRef = React.useRef(null);

  return (
    <img
      onMouseOver={() => {
        imgRef.current.src = secondaryImg;
      }}
      onMouseOut={() => {
        imgRef.current.src = primaryImg;
      }}
      src={primaryImg}
      ref={imgRef}
      alt=""
    />
  );
};

export default ImageToggle;
