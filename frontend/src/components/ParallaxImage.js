import React, { useEffect } from 'react';
// import { Parallax } from 'react-parallax';
import M from 'materialize-css'
import useWindowSize from '../utils/useWindowSize';

export const ParallaxImage = () => {
    
    const size = useWindowSize();
    
    useEffect(() => {
        // Get parallax
        const elems = document.querySelectorAll('.parallax');
        const instances = M.Parallax.init(elems);
    }, [])
    console.log('size')
    console.log(size)
    return (
        <div className='parallax-container valign-wrapper' style={{height: size.height * 0.8}}>
            <h1 style={{color: '#ffffff', backgroundColor: '#00000070', width:size.width, padding: '60px 2px'}}>Hello you beautiful human</h1>
            <div className='parallax'><img src='images/IMG_6953.jpg'></img></div>
        </div>
        // <Parallax bgImage='IMG_6952.jpg'>
        //     <div style={{height: window.innerHeight}}>
        //         asd
        //     </div>
        // </Parallax>
    )
}
