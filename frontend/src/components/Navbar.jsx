import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Link to="/" style={styles.logoLink}>FlashLearn</Link>
      </div>
      <div style={styles.links}>
        <Link to="/dashboard" style={styles.link}>Dashboard</Link>
        <Link to="/login" style={styles.link}>Login</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    padding: '1rem 2rem', 
    background: '#2c3e50', 
    color: '#fff',
    alignItems: 'center'
  },
  logo: { fontWeight: 'bold', fontSize: '1.5rem' },
  logoLink: { color: '#fff', textDecoration: 'none' },
  links: { display: 'flex', gap: '20px' },
  link: { color: '#ecf0f1', textDecoration: 'none', fontWeight: '500' }
};

export default Navbar;