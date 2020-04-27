import React from 'react';

import ImageToggle from '../src/ImageToggle';

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggle
        primaryImg="https://images.pexels.com/photos/1038935/pexels-photo-1038935.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        secondaryImg="https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
      &nbsp;&nbsp;&nbsp;
      <ImageToggle
        primaryImg="https://images.unsplash.com/photo-1558468746-d3c5465d498a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        secondaryImg="https://weprintanycolour.com/img/library/l/RGB-Colour-Mode.png"
        alt=""
      />
    </div>
  );
};

export default ImageChangeOnMouseOver;
