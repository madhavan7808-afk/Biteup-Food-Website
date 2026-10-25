import React, { useEffect, useState } from 'react';

export default function CursorEffect() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable on pointer fine devices (desktop with mouse)
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);

      const target = e.target;
      const clickable = target.closest('button, a, input, select, [role="button"], .cursor-pointer');
      setIsPointer(!!clickable);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 will-change-transform"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {/* Outer ambient glow */}
      <div
        className={`rounded-full transition-all duration-200 ${
          isPointer
            ? 'w-12 h-12 bg-red-500/20 ring-2 ring-red-500/40 blur-xs scale-125'
            : 'w-6 h-6 bg-red-400/15 ring-1 ring-red-400/30'
        }`}
      />
    </div>
  );
}
