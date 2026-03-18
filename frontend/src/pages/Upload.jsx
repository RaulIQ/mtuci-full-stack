import { Link } from 'react-router-dom';

const Upload = () => {
  return (
    <div style={styles.container}>
      <h2>Upload document</h2>
      <div style={styles.dropZone}>
        <p>Choose PDF file</p>
        <input type="file" accept=".pdf" style={styles.input} />
        <button style={styles.button}>Upload</button>
      </div>
      <div style={styles.backLink}>
        <Link to="/dashboard">← Back to Dashboard</Link>
      </div>
    </div>
  );
};

const styles = {
  container: { maxWidth: '500px', margin: '50px auto', textAlign: 'center' },
  dropZone: { border: '2px dashed #bdc3c7', padding: '50px', borderRadius: '10px', background: '#fafafa' },
  input: { margin: '20px 0' },
  button: { padding: '12px 30px', background: '#27ae60', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1rem' },
  backLink: { marginTop: '20px' }
};

export default Upload;