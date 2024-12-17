import { useState, useRef, useEffect } from 'react';

const useDragToScroll = () => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e, ref) => {
    setIsMouseDown(true);
    setStartX(e.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
    ref.current.style.cursor = 'grabbing'; // Change cursor to grabbing
  };

  const onMouseLeave = (ref) => {
    setIsMouseDown(false);
    ref.current.style.cursor = 'grab'; // Reset cursor on mouse leave
  };

  const onMouseUp = (ref) => {
    setIsMouseDown(false);
    ref.current.style.cursor = 'grab'; // Reset cursor on mouse up
  };

  const onMouseMove = (e, ref) => {
    if (!isMouseDown) return; // Only move if mouse is pressed
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const scroll = x - startX;
    ref.current.scrollLeft = scrollLeft - scroll; // Update scroll position
  };

  const bindScroll = (ref) => {
    useEffect(() => {
      const element = ref.current;

      if (element) {
        element.addEventListener('mousedown', (e) => onMouseDown(e, ref));
        element.addEventListener('mouseleave', () => onMouseLeave(ref));
        element.addEventListener('mouseup', () => onMouseUp(ref));
        element.addEventListener('mousemove', (e) => onMouseMove(e, ref));

        return () => {
          element.removeEventListener('mousedown', (e) => onMouseDown(e, ref));
          element.removeEventListener('mouseleave', () => onMouseLeave(ref));
          element.removeEventListener('mouseup', () => onMouseUp(ref));
          element.removeEventListener('mousemove', (e) => onMouseMove(e, ref));
        };
      }
    }, []);
  };

  return { bindScroll };
};

export default useDragToScroll;
