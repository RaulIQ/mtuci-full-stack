import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Study = () => {
  const { id } = useParams(); // Получаем ID из URL
  const [showAnswer, setShowAnswer] = useState(false);

  // Моковые данные для примера
  const card = {
    question: "What is photosynthesis?",
    answer: "The process by which green plants use sunlight to synthesize foods from carbon dioxide and water."
  };

  return (
    <div style={styles.container}>
      <h2>Study Mode (Doc ID: {id})</h2>
      
      <div style={styles.card}>
        <div style={styles.cardHeader}>Question</div>
        <div style={styles.cardContent}>{card.question}</div>
        
        {showAnswer && (
          <>
            <div style={styles.divider}></div>
            <div style={styles.cardHeader}>Answer</div>
            <div style={styles.cardContent}>{card.answer}</div>
          </>
        )}
      </div>

      <div style={styles.controls}>
        {!showAnswer ? (
          <button onClick={() => setShowAnswer(true)} style={styles.button}>Show Answer</button>
        ) : (
          <button onClick={() => setShowAnswer(false)} style={styles.buttonNext}>Next Card</button>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: { maxWidth: '600px', margin: '50px auto', textAlign: 'center' },
  card: { border: '1px solid #ddd', borderRadius: '10px', padding: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', marginBottom: '20px' },
  cardHeader: { fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', marginBottom: '5px' },
  cardContent: { fontSize: '1.2rem', fontWeight: 'bold' },
  divider: { height: '1px', background: '#eee', margin: '15px 0' },
  controls: { display: 'flex', justifyContent: 'center', gap: '10px' },
  button: { padding: '10px 20px', background: '#6c757d', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' },
  buttonNext: { padding: '10px 20px', background: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }
};

export default Study;