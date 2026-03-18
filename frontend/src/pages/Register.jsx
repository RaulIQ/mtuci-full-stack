import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div style={styles.container}>
      <h2>Register</h2>
      <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
        
        <div style={styles.formGroup}>
          <label>Username</label>
          <input type="text" placeholder="Enter your username" style={styles.input} required />
        </div>

        <div style={styles.formGroup}>
          <label>Email</label>
          <input type="email" placeholder="user@example.com" style={styles.input} required />
        </div>

        <div style={styles.formGroup}>
          <label>Password</label>
          <input type="password" placeholder="Create a password" style={styles.input} required />
        </div>

        <div style={styles.formGroup}>
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" style={styles.input} required />
        </div>

        <button type="submit" style={styles.button}>Register</button>
      </form>

      <div style={styles.footer}>
        <p>Already have an account? <Link to="/login" style={styles.link}>Login here</Link></p>
      </div>
    </div>
  );
};

const styles = {
  container: { 
    maxWidth: '400px', 
    margin: '80px auto', 
    padding: '30px', 
    border: '1px solid #ddd', 
    borderRadius: '8px', 
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    background: '#fff'
  },
  form: { 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '15px' 
  },
  formGroup: { 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '5px' 
  },
  input: { 
    padding: '10px', 
    borderRadius: '4px', 
    border: '1px solid #ccc', 
    fontSize: '1rem',
    outline: 'none'
  },
  button: { 
    padding: '12px', 
    background: '#27ae60', 
    color: 'white', 
    border: 'none', 
    borderRadius: '4px', 
    cursor: 'pointer', 
    fontSize: '1rem', 
    fontWeight: 'bold',
    marginTop: '10px'
  },
  footer: { 
    marginTop: '20px', 
    textAlign: 'center', 
    fontSize: '0.9rem' 
  },
  link: { 
    color: '#27ae60', 
    textDecoration: 'none',
    fontWeight: '500'
  }
};

export default Register;