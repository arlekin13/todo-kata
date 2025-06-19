import React, { useState, useEffect, useRef } from 'react';
import './Timer'
import PropTypes from 'prop-types';
import { compareAsc } from 'date-fns';

function Timer({ initialTime,completed }) {
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const animationRef = useRef();
  const startTimeRef = useRef(null)
   const accTimeRef = useRef(initialTime)

  const handlePlayPause = () => {
   
   setIsActive(!isActive)
  };

  useEffect(() => {
    if (isActive && !completed) {
      const updateTimer = (timestamp) => {
       if (!startTimeRef.current){
        startTimeRef.current = performance.now() 
      
    }

    const now = performance.now();
    const elapsed = now - startTimeRef.current
     setTime(accTimeRef.current+ elapsed);
        
       
        animationRef.current = requestAnimationFrame(updateTimer);
      };

      animationRef.current = requestAnimationFrame(updateTimer);
    }else{
      cancelAnimationFrame(animationRef.current)
      accTimeRef.current = time;
      startTimeRef.current = null;
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive,completed]);


  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
    <button 
        className={` ${isActive ? 'icon-pause' : 'icon-play'}`}
        onClick={handlePlayPause}
      >
        {isActive ? '⏸' : '▶'}
      </button>
      <span className="timer-display">{formatTime(time)}</span>
    </div>
  );
}

Timer.propTypes = {
  initialTime: PropTypes.number.isRequired,
  copmleted: PropTypes.bool.isRequired,
  
};

Timer.defaultProps = {
  onTimeUpdate: null,
};

export default Timer;