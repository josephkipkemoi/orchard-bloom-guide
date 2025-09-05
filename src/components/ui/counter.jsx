import React, { useEffect, useState } from 'react';

const Counter = ({ label, target, startDate, emoji }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 15000; // animation duration in ms
    const increment = Math.ceil(target / (duration / 50));

    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <div style={styles.card} className='flex flex-col items-center justify-center shadow-lg'>
      <h2  style={styles.emoji}>{emoji}</h2>
      <h3 className='font-bold' style={styles.label}>{label}</h3>
      <p style={styles.count}>{count.toLocaleString()}</p>
      <p style={styles.date}>Since {startDate}</p>
    </div>
  );
};

const TreeForestCounter = () => {
  return (
    <div style={styles.container}>
      <Counter
        label="Trees with School Children"
        target={103325}
        startDate="May, 2023"
        emoji="🌳"
      />
      <Counter
        label="Edible Forests"
        target={10}
        startDate="March, 2025"
        emoji="🥑"
      />
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '3rem',
    padding: '3rem',
    backgroundColor: '#fff',
    fontFamily: 'Segoe UI, sans-serif',
  },
  card: {
    backgroundColor: '#aaf0d1',
    borderRadius: '72px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    padding: '3.5rem',
    width: '420px',
    textAlign: 'center',
  },
  emoji: {
    fontSize: '4rem',
    margin: '0',
  },
  label: {
    fontSize: '1.6rem',
    color: '#2e7d32',
    margin: '0.5rem 0',
  },
  count: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    color: '#1b5e20',
    margin: '0.5rem 0',
  },
  date: {
    fontSize: '1.2rem',
    color: '#555',
  }
  
};

export default TreeForestCounter;
