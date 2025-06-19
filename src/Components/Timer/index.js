import React, { useState, useRef } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0); // Время в секундах
  const [timeLeft, setTimeLeft] = useState(0); // Оставшееся время
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const handleInputChange = (e) => {
    setSeconds(Number(e.target.value));
  };

  const startTimer = () => {
    if (seconds > 0 && !isRunning) {
      setTimeLeft(seconds);
      setIsRunning(true);
      setIsPaused(false);
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev > 1) {
            return prev - 1;
          } else {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return 0;
          }
        });
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setIsPaused(false);
    setTimeLeft(0);
  };

  const pauseTimer = () => {
    if (isRunning && !isPaused) {
      clearInterval(intervalRef.current);
      setIsPaused(true);
    }
  };

  const resumeTimer = () => {
    if (isPaused) {
      setIsPaused(false);
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev > 1) {
            return prev - 1;
          } else {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return 0;
          }
        });
      }, 1000);
    }
  };

  return (

  <div style={{ padding: '20px', maxWidth: '300px' }}>
      <h2>Таймер</h2>
      
      
      <input
        type="number"
        placeholder="Введите секунды"
        onChange={handleInputChange}
        disabled={isRunning}
        style={{ width: '100%', marginBottom: '10px' }}
      />
      
      
      <div style={{ marginBottom: '10px' }}>
        <strong>Оставшееся время: </strong> {timeLeft} секунд
      </div>
     </div>
    
  )

  return (
    <div style={{ padding: '20px', maxWidth: '300px' }}>
      <h2>Таймер</h2>
      <input
        type="number"
        placeholder="Введите секунды"
        onChange={handleInputChange}
        disabled={isRunning}
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <div style={{ marginBottom: '10px' }}>
        <strong>Оставшееся время: </strong> {timeLeft} секунд
      </div>
      <button onClick={startTimer} disabled={isRunning || seconds === 0} style={{ marginRight: '5px' }}>
        Старт
      </button>
      <button onClick={pauseTimer} disabled={!isRunning || isPaused} style={{ marginRight: '5px' }}>
        Пауза
      </button>
      <button onClick={resumeTimer} disabled={!isPaused} style={{ marginRight: '5px' }}>
        Продолжить
      </button>
      <button onClick={stopTimer}>Стоп</button>
    </div>
  );
}

export default Timer;