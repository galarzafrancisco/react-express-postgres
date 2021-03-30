import { useState, useEffect } from 'react';

// Hook
function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        // Add event listener to window size
        window.addEventListener('resize', handleResize);

        // Call handler to initialise state
        handleResize();
        
        // Remove listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []) // Empty array ensures that the effect is only run on mount

    return windowSize;
}

export default useWindowSize;