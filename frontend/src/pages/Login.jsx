import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div style={styles.formGroup}>
          <label>Email</label>
          <input type="email" placeholder="user@example.com" style={styles.input} required />
        </div>
        
        <div style={styles.formGroup}>
          <label>Password</label>
          <input type="password" placeholder="******" style={styles.input} required />
        </div>
        
        <button type="submit" style={styles.button}>Login</button>
      </form>
      
      <div style={styles.footer}>
        <p>Don't have an account? <Link to="/register" style={styles.link}>Register here</Link></p>
      </div>
    </div>
  );
};

const styles = {
  container: { maxWidth: '400px', margin: '80px auto', padding: '30px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' },
  form: { display: 'flex', flexDirection: 'column', gap: '15px' },
  formGroup: { display: 'flex', flexDirection: 'column', gap: '5px' },
  input: { padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' },
  button: { padding: '12px', background: '#3498db', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold' },
  footer: { marginTop: '20px', textAlign: 'center', fontSize: '0.9rem' },
  link: { color: '#3498db', textDecoration: 'none' }
};

export default Login;