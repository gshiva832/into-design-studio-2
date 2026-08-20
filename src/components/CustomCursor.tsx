import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'card' | 'drag' | 'hidden'>('default');
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    // Only enable on non-touch desktop devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const closestInteractive = target.closest(
        'button, a, input, select, textarea, [data-cursor], .cursor-pointer'
      ) as HTMLElement | null;

      if (closestInteractive) {
        const customType = closestInteractive.getAttribute('data-cursor');
        if (customType === 'view') {
          setCursorVariant('card');
          setCursorText('VIEW');
        } else if (customType === 'drag') {
          setCursorVariant('drag');
          setCursorText('DRAG');
        } else {
          setCursorVariant('hover');
          setCursorText('');
        }
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  const variants = {
    default: {
      width: 32,
      height: 32,
      backgroundColor: 'rgba(197, 168, 128, 0.05)',
      borderColor: 'rgba(197, 168, 128, 0.4)',
      scale: 1,
    },
    hover: {
      width: 54,
      height: 54,
      backgroundColor: 'rgba(197, 168, 128, 0.15)',
      borderColor: 'rgba(197, 168, 128, 0.8)',
      scale: 1.15,
    },
    card: {
      width: 72,
      height: 72,
      backgroundColor: 'rgba(13, 13, 13, 0.9)',
      borderColor: '#C5A880',
      scale: 1.1,
    },
    drag: {
      width: 68,
      height: 68,
      backgroundColor: 'rgba(13, 13, 13, 0.9)',
      borderColor: '#DFCCA8',
      scale: 1.1,
    },
    hidden: {
      opacity: 0,
      scale: 0,
    }
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
      {/* Outer Halo / Interactive Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-brand-gold flex items-center justify-center -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_rgba(197,168,128,0.2)]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        variants={variants}
        animate={cursorVariant}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      >
        {cursorText && (
          <span className="text-[10px] font-bold tracking-[0.2em] text-brand-gold uppercase select-none">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center Core Dot */}
      {cursorVariant === 'default' && (
        <motion.div
          className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-brand-gold -translate-x-1/2 -translate-y-1/2"
          style={{
            x: cursorX,
            y: cursorY,
          }}
        />
      )}
    </div>
  );
};
