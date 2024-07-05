"use client"

import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor') as HTMLElement | null;
    const cursorInner = document.querySelector('.cursor-inner') as HTMLElement | null;
    const cursorOuter = document.querySelector('.cursor-outer') as HTMLElement | null;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      if (cursor) {
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
      }
      if (cursorInner) {
        cursorInner.style.left = `${x}px`;
        cursorInner.style.top = `${y}px`;
      }
      if (cursorOuter) {
        cursorOuter.style.left = `${x}px`;
        cursorOuter.style.top = `${y}px`;
      }
    };

    const handleMouseDown = () => {
      if (cursorInner) cursorInner.classList.add('click');
      if (cursorOuter) cursorOuter.classList.add('click');
    };

    const handleMouseUp = () => {
      if (cursorInner) cursorInner.classList.remove('click');
      if (cursorOuter) cursorOuter.classList.remove('click');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <div className="cursor cursor-inner"></div>
      <div className="cursor cursor-outer"></div>
    </>
  );
};

export default CustomCursor;
