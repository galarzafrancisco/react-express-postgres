import React, { useEffect } from 'react';
// import { Parallax } from 'react-parallax';
import M from 'materialize-css'

export const ParallaxImage = () => {

    useEffect(() => {
        // Get parallax
        const elems = document.querySelectorAll('.parallax');
        const instances = M.Parallax.init(elems);
    }, [])

    return (
        <div className='parallax-container valign-wrapper' style={{height: window.innerHeight * 0.8}}>
            <h1 style={{color: '#ffffff', backgroundColor: '#00000070', width:window.innerWidth, padding: '60px 2px'}}>Hello you beautiful human</h1>
            <div className='parallax'><img src='images/IMG_6953.jpg'></img></div>
        </div>
        // <Parallax bgImage='IMG_6952.jpg'>
        //     <div style={{height: window.innerHeight}}>
        //         asd
        //     </div>
        // </Parallax>
    )
}
