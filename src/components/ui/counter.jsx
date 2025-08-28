import React, { useEffect, useState } from 'react';

const Counter = ({ label, target, startDate, emoji }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // animation duration in ms
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
    <div style={styles.card}>
      <h2 style={styles.emoji}>{emoji}</h2>
      <h3 style={styles.label}>{label}</h3>
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
        startDate="9th March 2023"
        emoji="🌳"
      />
      <Counter
        label="Edible Forests"
        target={10}
        startDate="March 2025"
        emoji="🍎"
      />
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: "row",
    gap: '2rem',
    padding: '2rem',
    backgroundColor: 'hsl(var(--accent))',
    fontFamily: 'Segoe UI, sans-serif',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    padding: '1.5rem',
    width: '250px',
    textAlign: 'center',
  },
  emoji: {
    fontSize: '2rem',
    margin: '0',
  },
  label: {
    fontSize: '1.2rem',
    color: '#2e7d32',
    margin: '0.5rem 0',
  },
  count: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#1b5e20',
    margin: '0.5rem 0',
  },
  date: {
    fontSize: '0.9rem',
    color: '#555',
  }
  
};

export default TreeForestCounter;
