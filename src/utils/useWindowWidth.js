import React, {useState, useLayoutEffect} from 'react';

export default function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    useLayoutEffect(() => {
        function updateWidth() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', updateWidth);
        updateWidth();
        return () => window.removeEventListener('resize', updateWidth);
    }, []);
    return width;
}