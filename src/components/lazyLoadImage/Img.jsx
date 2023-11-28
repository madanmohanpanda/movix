import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';

const Img = (props) => {
  // console.log(props);
  return (
    <LazyLoadImage
        className=''
        alt=''
        effect='blur'
        src={props.posterUrl || props.sposterUrl}
     />
  )
}

export default Img